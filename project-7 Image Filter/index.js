const uploadImg = document.getElementById('uploadImg');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const download = document.getElementById('download');
let img = new Image();
let filename = '';
// Upload image file
uploadImg.addEventListener('change', e=>{
    const file = document.getElementById('uploadImg').files[0];
    // console.log(file);
    const reader = new FileReader();
    if(file){
        // set filename
        filename = file.name;
        var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;    
        if (!allowedExtensions.exec(filename)) { 
            alert('Invalid File Type'); 
            filename = ''; 
            return false; 
        } 
        else{
            // read the data as url
            reader.readAsDataURL(file);
        }        
    }
    reader.addEventListener('load', ()=>{
        img = new Image();
        img.src = reader.result;
        // on image load then add to canvas
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
        }
    })
}); 
// Add Filters and Effects:----
let IsEdit = false;
const Fil_Edit_Down = (event) =>{
    // console.log(event.target.classList[1]);
    classList = event.target.classList[1];
    if(classList === 'BrightnessAdd'){
        Caman('#canvas', img, function(){
            this.brightness(5).render();
            IsEdit = !IsEdit;
        });
    }else if(classList === 'BrightnessDec'){
        Caman('#canvas', img, function(){
            this.brightness(-5).render();
        });
    }else if(classList === 'ContrastInc'){
        Caman('#canvas', img, function(){
            this.contrast(5).render();
        });
    }else if(classList === 'ContrastDec'){
        Caman('#canvas', img, function(){
            this.contrast(-5).render();
        });
    }else if(classList === 'SaturationInc'){
        Caman('#canvas', img, function(){
            this.saturation(5).render();
    });
    }else if(classList === 'SaturationDec'){
        Caman('#canvas', img, function(){
            this.saturation(-5).render();
    });
    }else if(classList === 'VibranceInc'){
        Caman('#canvas', img, function(){
            this.vibrance(5).render();
    });
    }else if(classList === 'VibranceDec'){
        Caman('#canvas', img, function(){
            this.vibrance(-5).render();
    });
    }else if(classList === 'Vintage'){
        Caman('#canvas', img, function(){
            this.vintage().render();
    });
    }else if(classList === 'Lomo'){
        Caman('#canvas', img, function(){
            this.lomo().render();
    });
    }else if(classList === 'CrosProcess'){
        Caman('#canvas', img, function(){
            this.crossProcess().render();
        });
    }else if(classList === 'Pinhole'){
        Caman('#canvas', img, function(){
            this.pinhole().render();
    });
    }else if(classList === 'Clarity'){
        Caman('#canvas', img, function(){
            this.clarity().render();
        });
    }else if(classList === 'SinCity'){
        Caman('#canvas', img, function(){
            this.sinCity().render();
        });
    }else if(classList === 'Nostalgia'){
        Caman('#canvas', img, function(){
            this.nostalgia().render();
        });
    }else if(classList === 'HerMajesty'){
        Caman('#canvas', img, function(){
            this.herMajesty().render();
        });
    }
}
const AllButtons = document.querySelectorAll('.efb');
for(const allbutton of AllButtons){
    allbutton.addEventListener('click', Fil_Edit_Down);
}
document.getElementById('remove').addEventListener('click', (event)=>{
    event.preventDefault();
    Caman('#canvas', img, function(){
        this.revert();
    });
});
// For Downloading:----
const Download = (canvas, filename) =>{
    let e;
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg');
    link.download = filename;
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}
download.addEventListener('click', (e)=>{
    // Get file extention:----
    const fileExtension = filename.slice(-4);
    let newfilename;
    if(fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png' || fileExtension === '.gif'){
        newfilename = filename.substring(0, filename.length-4) + '-edited.jpg';
    }
    Download(canvas, newfilename);
});
