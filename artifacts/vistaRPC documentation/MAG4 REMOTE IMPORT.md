---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAG4 REMOTE IMPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 REMOTE IMPORT{:/}
 tag | {::nomarkdown}REMOTE{:/}
 routine | [MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called from MS Windows Application.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGDATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the array of data needed to Import the Image(s)Format is sequential array of \Data Node^Data\i.e.   MAGDATA(1)=\PXPKG^8925\       MAGDATA(2)=\PXIEN^443\       MAGDATA(3)=\IMAGE^\\\\SERVER\\SHARE\\FILENAME.EXT^Description\{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | REMOTE^[MAGGSIUI](http://code.osehra.org/dox/Routine_MAGGSIUI_source.html)
 Method comment | RPC [MAG4 REMOTE IMPORT]
 Input parameters | {::nomarkdown}MAGDATA{:/}
 First comment | {::nomarkdown}<pre> Import Images from a Windows App, by sending an array.</pre>{:/}
 Code | {::nomarkdown}  I ($D(MAGDATA)<10) S MAGRY(0)="0^Missing Data Array !." Q<br> N I,J,ICT,DCT,MAGIX,IMAGES,ERR,X,Z<br> S (ERR,ICT,DCT)=0<br> S I="" F  S I=$O(MAGDATA(I)) Q:I=""  S X=MAGDATA(I) D  Q:ERR<br> . S Z=$P(X,U)<br> . I (X="")!(Z="") S MAGRY(0)="0^INVALID Data in Input Array: Node "_I_"="""_X_"",ERR=1 Q<br> . I Z="IMAGE" S ICT=ICT+1,IMAGES(ICT)=$P(X,U,2,99) Q<br> . S DCT=DCT+1,MAGIX(Z)=$P(X,U,2,99)<br> I 'ERR D IMPORT(.MAGRY,.IMAGES,.MAGIX){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}