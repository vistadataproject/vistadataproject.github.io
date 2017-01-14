---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWLR CUMULATIVE SECTION 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR CUMULATIVE SECTION{:/}
 tag | {::nomarkdown}RPT{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This rpc retrieves the part of the lab cumulative report selected by the user on the Labs tab.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal entry number of entry in the Patient file.{:/} | 
| {::nomarkdown}PART OF CUMULATIVE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Name that uniquely identifies the desired part of the lab cumulative.{:/} | 
| {::nomarkdown}DATE RANGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter indicates the number of days from TODAYthat the cumulative should search for information.{:/} | 
| {::nomarkdown}REPORT SECTION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter specifics which section of the lab cumulative partshould be retrieved. (An example of a part is 'Miscellaneous Tests'.)If REPORT SECTION equals 0 then the entire part is re-compiled and thefirst section is passed back. If the part is large then it isnecessary to divide it into sections. Currently, each section cannot be more than be more than 20,000 characters{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | RPT^[ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 Method comment | return cum report text
 First comment | {::nomarkdown}RPC: ORWLR REPORT TEXT{:/}
 Input parameters | {::nomarkdown}DFN<br/>RPTID<br/>DTRANGE<br/>SECTION{:/}
 Code | ```  IF $G(SECTION),$D(^TMP("ORLABDATA",$J,SECTION)) D  G RPTQ
 . S OROOT=$NA(^TMP("ORLABDATA",$J,SECTION))
 N LINES,ORSUB
 K ^TMP("ORLABDATA",$J)
 D CUMB(DFN,RPTID,DTRANGE)
 S LINES=$S($D(^TMP("LRH",$J,RPTID)):+^(RPTID),1:0)
 IF LINES<241 D
 . S OROOT=$NA(^TMP("LRC",$J))
 . S @OROOT@(.001)="1^1"
 ELSE  D
 . S ORSUB="ORLABDATA",OROOT=$NA(^TMP(ORSUB,$J,1))
 . D BUILD```




 Generated on January 14th 2017, 7:26:35 am