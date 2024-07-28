document.querySelector('.tt1').addEventListener('click',function(){
    document.querySelector('.contact').scrollIntoView({ behavior: 'instant' ,block: 'center'});
})
document.querySelector('.tt2').addEventListener('click',function(){
    document.querySelector('.shome').scrollIntoView({ behavior: 'instant'});
})
document.querySelector('.tt3').addEventListener('click',function(){
    document.querySelector('.about').scrollIntoView({ behavior: 'instant' ,block: 'center'});
})
document.querySelector('.pathway').addEventListener('click',function(){
    document.querySelector('.pathways').scrollIntoView({ behavior: 'instant',block: 'start' });
})

document.querySelector('.t1').addEventListener('click',function(){
    document.querySelector('.contact').scrollIntoView({ behavior: 'instant' ,block: 'center'});
})
document.querySelector('.t2').addEventListener('click',function(){
    document.querySelector('.shome').scrollIntoView({ behavior: 'instant'});
})
document.querySelector('.t3').addEventListener('click',function(){
    document.querySelector('.about').scrollIntoView({ behavior: 'instant' ,block: 'nearest'});
})
document.querySelector('.searchbar').addEventListener('keydown',function(event){
    if (event.key==='Enter'){
      const a= document.querySelector('.searchbar').value.toLowerCase();
      document.querySelector('.searchbar').value='';
      const searchElement = document.querySelector('.searchs');
      const b = document.querySelector('.searchs').innerText.toLowerCase();
      if(a==='courses' || a==='course'){
        courses();
        document.querySelector('.pathways').scrollIntoView({ behavior: 'smooth',block: 'nearest' });
      }
      else if(a==='projects' || a==='project'){
        projects();
        document.querySelector('.pathways').scrollIntoView({ behavior: 'smooth', block: 'end' });
      }
      else if(a==='internships' || a==='internship'){
        internships();
        document.querySelector('.pathways').scrollIntoView({ behavior: 'smooth',block: 'end' });
      }
      else{
        if (b.includes(a)){
            const c = document.querySelector('.o').innerText.toLowerCase();
            const ca = document.querySelector('.searchs');
            const d = document.querySelector('.p').innerText.toLowerCase();
            const da = document.querySelector('.p');
            if (c.includes(a)){
                ca.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
            else if(d.includes(a)){
                da.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
                }
        else{
          alert('Not Pathway Found!');
        }
      }
      
    }
});
function courses(){
    var button = document.querySelector('.coursebutton');
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    var button = document.querySelector('.projectbutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    var button = document.querySelector('.internbutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    document.querySelector('.pwd').innerHTML='';
    document.querySelector('.p').innerHTML='';
    let html='';
    let ht='';
    html = `
    <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ic1.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">Python</p>
                    <p>Master the versatile and powerful Python programming language, ideal for beginners and experienced developers alike.</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ic2.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">Java</p>
                <p>Learn Java, the robust, high-level programming language used for building secure, scalable applications</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ic3.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">HTML</p>
                <p>Understand HTML, the core markup language for creating structured and accessible web content.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ic4.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">
                CSS
                </p>
                <p>Discover CSS, the styling language that brings visual design and layout to web pages.</p>
            </div></div>
          </div>
        </div>  `
        ht= `<div class="pwd p">
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ic5.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">C</p>
                    <p>Dive into the foundational C language, perfect for understanding low-level programming and system architecture</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ic7.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">JavaScript</p>
                <p>Explore JavaScript, the essential language for dynamic and interactive web development.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ic6.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">C++</p>
                <p>Enhance your programming skills with C++, a powerful language for developing high-performance applications.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ic8.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">SQL</p>
                <p>Unlock the potential of data with SQL, the standard language for managing and querying relational databases.</p>
            </div></div>
          </div>
    
    `
    document.querySelector('.pwd').innerHTML=html;
    document.querySelector('.p').innerHTML=ht;
   
}

function projects(){
    var button = document.querySelector('.projectbutton');
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    var button = document.querySelector('.coursebutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    var button = document.querySelector('.internbutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    document.querySelector('.pwd').innerHTML='';
    document.querySelector('.p').innerHTML='';
    let html='';
    let ht='';
    html = `
    <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ip1.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">TaskMaster</p>
                    <p>Create a task management app with features like to-do lists, deadlines, priority settings, and reminders.</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ip2.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">ChatHub</p>
                <p>Develop a real-time chat application with user authentication, private messaging, and end-to-end encryption.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ip3.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">StockTrack</p>
                <p>Build a stock market tracker that provides real-time updates, historical data analysis, and investment insights.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ip4.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">
                FitBuddy
                </p>
                <p>Design a fitness tracker that monitors workouts, tracks calorie intake, provides progress reports, and goal setting.</p>
            </div></div>
          </div>
        </div>  `
        ht= `<div class="pwd p">
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ip5.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">BudgetWise</p>
                    <p>Create a personal finance manager to track expenses, set monthly budgets, generate financial reports, and visualize spending patterns.</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ip6.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">QuizWhiz</p>
                <p>Develop an interactive quiz app with customizable questions, user score tracking, and performance analytics.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ip7.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">WeatherDash</p>
                <p>Build a weather dashboard that displays current conditions, extended forecasts, severe weather alerts, and weather trends.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ip8.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">RecipeBook</p>
                <p>Design a recipe management app that allows users to store, categorize, and share favorite recipes with detailed instructions and ingredients.</p>
            </div></div>
          </div>
    
    `
    document.querySelector('.pwd').innerHTML=html;
    document.querySelector('.p').innerHTML=ht;
   
}
function internships(){
    var button = document.querySelector('.projectbutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    var button = document.querySelector('.coursebutton');
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    var button = document.querySelector('.internbutton');
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
    document.querySelector('.pwd').innerHTML='';
    document.querySelector('.p').innerHTML='';
    let html='';
    let ht='';
    html = `
    <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ii1.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">Data Analyst Intern</p>
                    <p>Analyze large datasets to extract meaningful insights, create visualizations, and generate reports for decision-making.</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ii2.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">UX/UI Design Intern</p>
                <p>Assist in designing user interfaces and experiences, create wireframes, prototypes, and conduct user research for improved usability.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ii3.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">Cybersecurity Intern</p>
                <p>Work on identifying and mitigating security threats, performing vulnerability assessments, and implementing security protocols.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ii4.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">
                Cloud Solutions Intern
                </p>
                <p>Help deploy and manage cloud-based applications, work with cloud platforms (e.g., AWS, Azure), and optimize cloud infrastructure.</p>
            </div></div>
          </div>
        </div>  `
        ht= `<div class="pwd p">
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ii5.jpg">
                </div>
                <div class="pwd1txt">
                    <p class="p1">Web Developer Intern</p>
                    <p>Work on designing and implementing interactive user interfaces, using HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div class="pwd1">
                <div class="pwd1img"> <img class="pwd1i1" src="thumbnails/ii7.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">Software Development</p>
                <p>Contribute to coding, debugging, and testing software applications, work with development teams, and participate in code reviews.</p>
            </div>
        </div>
            <div class="pwd1">
                <div class="pwd1img">
                    <img class="pwd1i1" src="thumbnails/ii8.jpg">
                </div>
                <div class="pwd1txt">
                <p class="p1">Product Management</p>
                <p>Support product planning and strategy, conduct market research, and assist with product development and launch processes.</p>
            </div></div>
             <div class="pwd1">
                <div class="pwd1img"><img class="pwd1i1" src="thumbnails/ii6.jpg"></div>
                <div class="pwd1txt">
                <p class="p1">Machine Learning </p>
                <p>Assist in developing and training machine learning models, analyze data, and implement algorithms for predictive analytics.</p>
            </div>
        </div>
          </div>
    
    `
    document.querySelector('.pwd').innerHTML=html;
    document.querySelector('.p').innerHTML=ht;
   
}
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrollContent');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -270, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 270, behavior: 'smooth' });
        console.log('hey');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrolContent');
    const leftArrow = document.getElementById('lefArrow');
    const rightArrow = document.getElementById('righArrow');
    leftArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -287, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 287, behavior: 'smooth' });
        console.log('hey');
    });
});

function openav(){
    document.querySelector('.sidenav').style.width = '170px';
    
}
function closenav(){
    
    document.querySelector('.sidenav').style.width = '0';
}
