// function book(bookid,author,title,page,read)
// {
//     this.id = bookid;
//     this.author = author;
//     this.title=title;
//     this.page=page;
//     if( read == 0)
//     {
//         this.read='read';
//     }
//     else if( read==1)
//     {
//         this.read = 'notread';
//     }
//     else if(read==2)
//     {
//         this.read = 'reading';
//     }
//     this.bookinfo=function()
//     {
//         return `The ${this.title} with ${this.author} having pages-${page} and status:${this.read}`;
//     }
// }

class book{
    constructor(bookid,author,title,page,read)
    {
        this.id= bookid;
        this.author = author;
        this.title=title;
        this.page=page;
        if(read == 0)
        {
            this.read='read';
        }
        else if(read==1)
        {
            this.read = 'notread';
        }
        else if(read==2)
        {
            this.read = 'reading';
        }
    }
    bookinfo()
    {
        return `The ${this.title} with ${this.author} haveing pages-${this.apge} and status:${this.read}`;

    }
}

const dialog=document.getElementById('popup');
const lib=[];let count =0;
const shelf=document.getElementById('bookshelf');
const show=document.getElementById('book1');
console.log(show);
const addbook = document.getElementById('addbook');
const title =document.getElementById('title');
    const author =document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');
    const  notread = document.getElementById('notread');
    const reading = document.getElementById('reading');


const sub  = document.querySelector('form');
addbooks();
function addbooks()
{
addbook.addEventListener('click',function()
{
   console.log('hello');
   dialog.showModal();
   
    read.addEventListener('change',function()
    {
        if(read.checked)
        {
            notread.checked=false;
            reading.checked=false;

        }
    })
   notread.addEventListener('change', function () {
        if (notread.checked) {
        read.checked = false;
        reading.checked = false;
        }
    });

    reading.addEventListener('change', function () {
        if (reading.checked) {
        notread.checked = false;
        read.checked = false;
    }
    });
    
   
}


)
sub.addEventListener('submit',function(e)
{
    e.preventDefault();
    // console.log('helloji');
    
    // const read = document.getElementById('read').value;
    // const notread = document.getElementById('notread').value;
    // const reading = document.getElementById('reading').value;
    // console.log(title,author,pages,read);
    const newbook = show.cloneNode('true');
    newbook.id = `book${count}${Date.now()}`;
    const makedid= newbook.id ;
    console.log(newbook);
    // console.log(newbook);
    shelf.append(newbook);
    document.querySelector(`#${makedid} #stitle`).innerText=title.value  ;
    document.querySelector(`#${makedid} #sauthor`).innerText=author.value  ;
    document.querySelector(`#${makedid} #spage`).innerText=pages.value  ;
    let forobj; 
    if( read.checked)
    {
        document.querySelector(`#${makedid} #sread`).style.backgroundColor ='green';
        forobj=0;

    }
    if( notread.checked)
    {
        document.querySelector(`#${makedid} #snotread`).style.backgroundColor ='red';
        forobj=1;

    }
    if( reading.checked)
    {
        document.querySelector(`#${makedid} #sreading`).style.backgroundColor ='yellow';
        forobj=2

    }

    const newbookinstnace = new book(makedid,title.value , author.value, pages.value , forobj);
    document.querySelector(`#${makedid}`).querySelector('#addbookbtn').remove();
    console.log(newbookinstnace.bookinfo());
    lib.push(newbookinstnace);
    // newbook.getElementById('sauthor').innertext= author.value
    // newbook.getElementById('spages').innertext= pages.value
    
        // console.log(newboook);
    console.log(lib);



    // console.log(title.value , author,value , pages.value );
    dialog.close();
    document.querySelector(`#${makedid} #deletebook`).addEventListener('click',function()
    {
        shelf.querySelector(`#${makedid}`).remove();
        lib.pop(newbookinstnace);
        
        console.log(lib);
    }
    )
})
}

document.getElementById('listofbooks').addEventListener('click',function(e){

    document.getElementById('listofbooksdialog').showModal();
    e.preventDefault();
    document.getElementById('listofbooksul').querySelectorAll('li').forEach((li)=>{
        li.innerHTML=book.bookinfo();
    })

}
)
document.getElementById('listofbooksdialogclose').addEventListener('click',function(e){
    document.getElementById('listofbooksdialog').close();
    // e.preventDefault();
})





