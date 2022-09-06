class ListBinding{

    constructor(element){
        this.listElement=element;
        this.courseList=[];
    }
    update(){
        while(this.listElement.firstChild)
        this.listElement.removeChild(this.listElement.firstChild);
        for(const course of this.courseList)
        this.listElement.appendChild(ListBinding.createListItem(course));
    }
    static createListItem(text){
        const li=document.createElement("li");
        li.textContent=text;
        return li;
    }
    add(course){
        this.courseList.push(course);
        this.update();
    }
}