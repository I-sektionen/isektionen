/**
 * Created by andreas on 17/01/16.
 */

// Create new chart from canvas elements



var industriellEkonomictx = document.getElementById("chart-industriell-ekonomi").getContext("2d");

//if (document.getElementById("chart-industriell-ekonomi-internationell").is(":visible")) {

if ($("#ii-info").is(":hidden")) {
    var industriellEkonomiInternationellctx = document.getElementById("chart-industriell-ekonomi-internationell").getContext("2d");
}


industriellEkonomiChartData = [
    {
        value: 80,
        color: shadeBlendConvert(0.0,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Teknik & och fyisk"
    },
    {
        value: 60,
        color: shadeBlendConvert(0.1,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Matematik"
    },
    {
        value: 30,
        color: shadeBlendConvert(0.2,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Industriell ekonomi & Management"
    },
    {
        value: 15,
        color: shadeBlendConvert(0.3,'#F9D026'),
        highlight:shadeBlendConvert(-0.1,'#F9D026'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 120,
        color: shadeBlendConvert(0.4,'#F9D026'),
        highlight: shadeBlendConvert(-0.1,'#F9D026'),
        label: "Masterprofil"
    }
]
industriellEkonomiInternationellChartData = [
    {
        value: 80,
        color: shadeBlendConvert(0.0,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Teknik & och fyisk"
    },
    {
        value: 60,
        color: shadeBlendConvert(0.05,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Matematik"
    },
    {
        value: 20,
        color: shadeBlendConvert(0.1,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Industriell ekonomi & Management"
    },
    {
        value: 10,
        color: shadeBlendConvert(0.15,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 10,
        color: shadeBlendConvert(0.20,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Ledarskap och kommunikation"
    },
    {
        value: 120,
        color: shadeBlendConvert(0.25,'#255F17'),
        highlight: shadeBlendConvert(-0.1,'#255F17'),
        label: "Masterprofil"
    }
]

// This is a function that creates shades of a color
// Found on stack overflow http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
// By Pimp Trizkit
function shadeBlendConvert(p, from, to) {
    if(typeof(p)!="number"||p<-1||p>1||typeof(from)!="string"||(from[0]!='r'&&from[0]!='#')||(typeof(to)!="string"&&typeof(to)!="undefined"))return null; //ErrorCheck
    if(!this.sbcRip)this.sbcRip=function(d){
        var l=d.length,RGB=new Object();
        if(l>9){
            d=d.split(",");
            if(d.length<3||d.length>4)return null;//ErrorCheck
            RGB[0]=i(d[0].slice(4)),RGB[1]=i(d[1]),RGB[2]=i(d[2]),RGB[3]=d[3]?parseFloat(d[3]):-1;
        }else{
            switch(l){case 8:case 6:case 3:case 2:case 1:return null;} //ErrorCheck
            if(l<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(l>4?d[4]+""+d[4]:""); //3 digit
            d=i(d.slice(1),16),RGB[0]=d>>16&255,RGB[1]=d>>8&255,RGB[2]=d&255,RGB[3]=l==9||l==5?r(((d>>24&255)/255)*10000)/10000:-1;
        }
        return RGB;}
    var i=parseInt,r=Math.round,h=from.length>9,h=typeof(to)=="string"?to.length>9?true:to=="c"?!h:false:h,b=p<0,p=b?p*-1:p,to=to&&to!="c"?to:b?"#000000":"#FFFFFF",f=sbcRip(from),t=sbcRip(to);
    if(!f||!t)return null; //ErrorCheck
    if(h)return "rgb("+r((t[0]-f[0])*p+f[0])+","+r((t[1]-f[1])*p+f[1])+","+r((t[2]-f[2])*p+f[2])+(f[3]<0&&t[3]<0?")":","+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*10000)/10000:t[3]<0?f[3]:t[3])+")");
    else return "#"+(0x100000000+(f[3]>-1&&t[3]>-1?r(((t[3]-f[3])*p+f[3])*255):t[3]>-1?r(t[3]*255):f[3]>-1?r(f[3]*255):255)*0x1000000+r((t[0]-f[0])*p+f[0])*0x10000+r((t[1]-f[1])*p+f[1])*0x100+r((t[2]-f[2])*p+f[2])).toString(16).slice(f[3]>-1||t[3]>-1?1:3);
}


var industriellEkonomiChart = new Chart(industriellEkonomictx).Doughnut(industriellEkonomiChartData);

if ($("#ii-info").is(":hidden")) {
    var industriellEkonomiInternationellChart = new Chart(industriellEkonomiInternationellctx).Doughnut(industriellEkonomiInternationellChartData);

}