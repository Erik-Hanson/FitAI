### Installing requirements
```
  cd backend
  source venv/bin/activate
  pip3 install -r requirements.txt
```

Note if you are on WSL you may have to do some extra steps by adding the following to your .bashrc

```
alias pip3="DISPLAY= pip3"
```

### Starting the backend
```
uvicorn main:app --reload --host 0.0.0.0 --port 8001
```