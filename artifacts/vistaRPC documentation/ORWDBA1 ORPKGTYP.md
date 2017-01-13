---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDBA1 ORPKGTYP 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 ORPKGTYP{:/}
 tag | {::nomarkdown}ORPKGTYP{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of Order Package Types{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Build BA supported packages array
 Input Parameters | {::nomarkdown}ORLST{:/}
 Lines | {::nomarkdown} N OIREC,OIV,OIVN<br/> F I=1:1 S ORPKG=$P("GMRC;LR;PSO;RA",";",I) Q:ORPKG=""  D<br/> . S ORPKG(+$O(^DIC(9.4,"C",ORPKG,0)))=ORPKG  ; ^DIC(9.4) is package file<br/> S GMRCPROS=+$O(^DIC(9.4,"C","GMRC",0))<br/> D ORPKG1(.Y,.ORLST){:/}
 Leading comment lines | {::nomarkdown}GMRC=Prosthetics, LR=Lab, PSO=Pharmacy, RA=Radiology{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Order IENs{:/} | 




 Generated on January 13th 2017, 7:15:28 am