
## Initial Setup:
This repo currently contains the starter files.
Clone repo and create a virtual environment

Remember install "npm" if you haven't
You can read "How to Install Node.js and NPM" in https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac#windows
```
$ git clone https://github.com/ProXBucky/BTL-Chatbot-Python.git
$ npm install vite
$ cd chatbot-deployment
$ (chatbot-deployment) python3 -m venv venv 
or
$ (chatbot-deployment) py -3.7-64 -m venv venv (download version <3.9)

```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk flask_cors
or
$ (venv) py -3.7-64 -m pip install Flask torch torchvision nltk flask_cors (download version <3.9)
```
Install nltk package
```
$ (chatbot-deployment) python 
$ (chatbot-deployment) py -3.7-64 (download version <3.9)
>>> import nltk
>>> nltk.download('punkt')
```
Modify `intents.json` with different intents and responses for your Chatbot

Run training answer for chatbot
```
$ (chatbot-deployment) python train.py 
or 
$ (chatbot-deployment) py -3.7-64 train.py (download version <3.9)
```
This will dump data.pth file. And then run
the following command to test it in the console.

Test backend console (Can skip)
```
$ (chatbot-deployment) python chat.py
or
$ (chatbot-deployment) py -3.7-64 chat.py (download version <3.9)
```

Run backend Flask (app.py)
```
$ (chatbot-deployment) python app.py
or
$ (chatbot-deployment) py -3.7-64 app.py (download version <3.9)
```

Install frontend ReactJS
```
Open new terminal
$ cd chatbot-deployment/Frontend-React
$ (Frontend-React) rm -r package-lock.json
$ (Frontend-React) npm install 
```

Run frontend ReactJS
```
$ (Frontend-React) npm run dev
```




