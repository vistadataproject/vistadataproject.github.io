---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU LONG LIST SURGERY TITLES 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU LONG LIST SURGERY TITLES{:/}
 tag | {::nomarkdown}LNGSURG{:/}
 routine | [TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC serves data to a longlist of selectable TITLES for the classnamed in the CLNAME parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the reference title from which the longlist is scrolling.{:/} | 
| {::nomarkdown}DIR{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}This is the direction in which the longlist is scrolling from thereference title.{:/} | 
| {::nomarkdown}CLNAME{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the name of the class for which titles are being presented.Allowable values are: \SURGICAL REPORTS\\PROCEDURE REPORTS (NON-O.R.)\{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LNGSURG^[TIUSRVD](http://code.osehra.org/dox/Routine_TIUSRVD_source.html)
 Method comment | long list SURGICAL REPORT titles
 Input parameters | {::nomarkdown}FROM, DIR, CLNAME{:/}
 First comment | {::nomarkdown}<pre> CLNAME = "SURGICAL REPORTS" or "PROCEDURE REPORTS (NON-O.R.)"<br/>           depending on context</pre>{:/}
 Code | {::nomarkdown}  N CLASS S CLNAME=$S($G(CLNAME)]"":CLNAME,1:"OPERATION REPORTS")<br> S CLASS=$$CLASS^TIUSROI(CLNAME) Q:+CLASS'>0<br> D LONGLIST(.Y,CLASS,$G(FROM),$G(DIR,1)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}