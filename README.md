# omni-stack-8 (Tindev)
OmniStack Week (8) by: RocketSeat

## Dependencies to run this project:

###  NodeJs 
Ps: You'll need [NodeJs](https://nodejs.org/en/download/) to run this project.

---

### First, clone project in your PC:

```shell
git clone https://github.com/gabrieldarezzo/omni-stack-8.git
cd omni-stack-8
```

---

## BackEnd (NodeJs)
```shell
cd backend
npm install
```
Wait all dependencies install in `/node_modules`, after finish just run:
```
npm run dev
```


ToDo list (BackEnd):
- [ ] Fix bug in /devs, if don't have deslikes || likes will crash list

---

## FrontEnd (ReactJs)

Visual:  
![Demo do Tinder Dev](docs/demo-app.png)  

Start 
```shell
cd frontend
npm install
```  
Wait all dependencies install in `/node_modules`, after finish just   
```
npm start
```


## Mobile (React-Native)


### Android in Windows
Before go ahead with this tutorial, I recomend you download [Android Studio](https://developer.android.com/studio), and run a [Hello World](https://medium.com/@rodolfopeixoto/criando-um-projeto-no-android-studio-feacf8a775c4)

Ps: Running on device is easier than emulator ;-)


After run Hello World, you'll need install `react-native-cli` in global mode:  
```shell
npm install -g react-native-cli
```

Now install all dependencies install in `/node_modules`
```shell
cd tindev
npm install
```  

Now just run this command:
```
react-native run-android
```
Ps: Make sure you Android is connected to USB with `Remote Debugging Android Devices`, more info here: 
https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br

You'll see this screen in Your Android Device if everthings work:
![Demo do Tinder Dev](docs/react-native.jpg)  