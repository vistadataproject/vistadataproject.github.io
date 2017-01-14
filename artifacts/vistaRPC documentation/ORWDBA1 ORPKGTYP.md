---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA1 ORPKGTYP 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA1 ORPKGTYP{:/}
 tag | {::nomarkdown}ORPKGTYP{:/}
 routine | [ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of Order Package Types{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORLST{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Order IENs{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ORPKGTYP^[ORWDBA1](http://code.osehra.org/dox/Routine_ORWDBA1_source.html)
 Method comment | Build BA supported packages array
 First comment | {::nomarkdown}GMRC=Prosthetics, LR=Lab, PSO=Pharmacy, RA=Radiology{:/}
 Input parameters | {::nomarkdown}ORLST{:/}
 Code | ```  N OIREC,OIV,OIVN
 F I=1:1 S ORPKG=$P("GMRC;LR;PSO;RA",";",I) Q:ORPKG=""  D
 . S ORPKG(+$O(^DIC(9.4,"C",ORPKG,0)))=ORPKG  ; ^DIC(9.4) is package file
 S GMRCPROS=+$O(^DIC(9.4,"C","GMRC",0))
 D ORPKG1(.Y,.ORLST)```




 Generated on January 14th 2017, 7:26:36 am