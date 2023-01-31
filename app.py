from flask import Flask, request, send_file, render_template
from pytube import YouTube
import subprocess, os

app = Flask(__name__)


@app.route("/")
def main():
  return render_template("main.html")


@app.route("/download_mp4", methods=["POST"])
def download_mp4():
  try:
    url = request.form["url"]
    stream = YouTube(url).streams.filter(
      progressive=True, file_extension="mp4").order_by(
        "resolution").desc().first().download("Downloads/mp4")
    return send_file(stream, as_attachment=True)
  except:
    return "<h1 style='font-weight: 400; font-family: Segoe UI;'>Something went wrong please try again ...</h1>"


@app.route("/download_mp3", methods=["POST"])
def download_mp3():
  try:
    url = request.form["url"]
    stream = YouTube(url).streams.filter(
      progressive=True, file_extension="mp4").order_by(
        "resolution").desc().first().download("Downloads/mp3")
    subprocess.run(
      f'ffmpeg -y -i "{stream}" "{stream.replace(".mp4", ".mp3")}"',
      shell=True)
    return send_file(stream.replace(".mp4", ".mp3"), as_attachment=True)
  except:
    return "<h1 style='font-weight: 400; font-family: Segoe UI;'>Something went wrong please try again ...</h1>"


@app.route("/delete_downloads")
def delete_downloads():
  for i in os.listdir("./Downloads/mp3"):
    os.remove("./Downloads/mp3/" + i)
  for i in os.listdir("./Downloads/mp4"):
    os.remove("./Downloads/mp4/" + i)
  return "<h1 style='font-weight: 400; font-family: Segoe UI;'>Downloads deleted successfully</h1>"


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=3000)
