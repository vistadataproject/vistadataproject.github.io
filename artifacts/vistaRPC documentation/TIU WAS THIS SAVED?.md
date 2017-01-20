---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU WAS THIS SAVED? 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}TIU WAS THIS SAVED?{:/}
 tag | {::nomarkdown}SAVED{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean Remote Procedure will evaluate whether a given document wascommitted to the database, or whether the user who last edited it wasdisconnected.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Internal Entry Number of the Document in the TIU Document File(#8925).{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SAVED^[TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 Method comment | Was the document committed to the database?
 Input parameters | {::nomarkdown}TIUDA{:/}
 Code | {::nomarkdown}  N TIUD12,TIUD13,TIUEBY,TIUAUT,TIUECS S TIUY=1<br> S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUD13=$G(^(13))<br> S TIUEBY=$P(TIUD13,U,2),TIUAUT=$P(TIUD12,U,2),TIUECS=$P(TIUD12,U,8)<br> I $D(^TIU(8925,"ASAVE",+DUZ,TIUDA)) D  Q<br> . S TIUY="0^You appear to have been disconnected..."<br> I DUZ'=TIUEBY,(TIUEBY'=TIUAUT),$D(^TIU(8925,"ASAVE",+TIUEBY,TIUDA)) D  Q<br> . S TIUY="0^The transcriber appears to have been disconnected..."<br> I DUZ'=TIUAUT,$D(^TIU(8925,"ASAVE",+TIUAUT,TIUDA)) D  Q<br> . S TIUY="0^The author appears to have been disconnected..."<br> I DUZ'=TIUECS,$D(^TIU(8925,"ASAVE",+TIUECS,TIUDA)) D  Q<br> . S TIUY="0^The expected cosigner appears to have been disconnected..."{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rTIU.pas">rTIU.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}