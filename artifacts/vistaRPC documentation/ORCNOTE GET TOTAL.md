---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORCNOTE GET TOTAL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORCNOTE GET TOTAL{:/}
 tag | {::nomarkdown}GETTOT{:/}
 routine | [ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | GETTOT^[ORCNOTE](http://code.osehra.org/dox/Routine_ORCNOTE_source.html)
 Method comment | get total count of progress notes
 Input parameters | {::nomarkdown}DFN{:/}
 First comment | {::nomarkdown}<pre> ^TIU(8925,"ACLPT",3) refers to progress notes class</pre>{:/}
 Code | {::nomarkdown}  N ORTIDT,ORTIFN<br> S ORY=0<br> Q:'$G(DFN)<br> F ORTIDT=0:0 S ORTIDT=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT)) Q:ORTIDT<1  D<br> .F ORTIFN=0:0 S ORTIFN=$O(^TIU(8925,"ACLPT",3,DFN,ORTIDT,ORTIFN)) Q:ORTIFN<1  S ORY=ORY+1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fNotes.pas">fNotes.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on February 3rd 2017, 7:02:05 am</p>{:/}