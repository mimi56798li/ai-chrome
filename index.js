async function sayHello(){
    let[tab]= await ChatCompletionStreamingRunner.tabs.query({active: true});
    chrome.scripting.execitesScript({
        target: {tabId : tab.id },
        func: () =>{
            document.body 
            alert("Hello from my extension");
        }
    });
}
document.getElementById("myButton").addEventListener("click",sayhello);