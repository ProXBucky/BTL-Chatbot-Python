
## Initial Setup:
This repo currently contains the starter files.

Clone repo and create a virtual environment
```
$ git clone https://github.com/python-engineer/chatbot-deployment.git
$ cd chatbot-deployment
$ python3 -m venv venv (py -3.7-64 -m venv venv)
```
Install dependencies
```
$ (venv) pip install Flask torch torchvision nltk flask_cors
$ (venv) py -3.7-64 -m pip install Flask torch torchvision nltk flask_cors
```
Install nltk package
```
$ (venv) python (py -3.7-64)
>>> import nltk
>>> nltk.download('punkt')
```
Modify `intents.json` with different intents and responses for your Chatbot

Run training answer for chatbot
```
$ python (py -3.7-64) train.py
```
This will dump data.pth file. And then run
the following command to test it in the console.

Test backend console (Can skip)
```
$ python (py -3.7-64) chat.py
```

Run backend Flask (app.py)
```
$ python (py -3.7-64) app.py
```

Install frontend ReactJS
```
$ cd Frontend-React
$ npm install (install npm if you haven't)
```

Run frontend ReactJS
```
$ npm run dev
```




