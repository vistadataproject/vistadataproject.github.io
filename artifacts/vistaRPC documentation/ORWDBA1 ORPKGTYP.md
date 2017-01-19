---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 ORPKGTYP 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 ORPKGTYP{:/}
 tag | {::nomarkdown}ORPKGTYP{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of Order Package Types{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Order IENs{:/} | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | ORPKGTYP^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | Build BA supported packages array
 First comment | {::nomarkdown}<pre> GMRC=Prosthetics, LR=Lab, PSO=Pharmacy, RA=Radiology</pre>{:/}
 Input parameters | {::nomarkdown}ORLST{:/}
 Code | {::nomarkdown}  N OIREC,OIV,OIVN<br> F I=1:1 S ORPKG=$P("GMRC;LR;PSO;RA",";",I) Q:ORPKG=""  D<br> . S ORPKG(+$O(^DIC(9.4,"C",ORPKG,0)))=ORPKG  ; ^DIC(9.4) is package file<br> S GMRCPROS=+$O(^DIC(9.4,"C","GMRC",0))<br> D ORPKG1(.Y,.ORLST){:/}


### CPRS

[BA/UBACore.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/UBACore.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}