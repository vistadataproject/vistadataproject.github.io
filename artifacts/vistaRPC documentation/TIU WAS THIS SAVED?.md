---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; TIU WAS THIS SAVED? 

 property | value 
--- | --- 
 label | {::nomarkdown}TIU WAS THIS SAVED?{:/}
 tag | {::nomarkdown}SAVED{:/}
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Boolean Remote Procedure will evaluate whether a given document wascommitted to the database, or whether the user who last edited it wasdisconnected.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Was the document committed to the database?
 Input Parameters | {::nomarkdown}TIUDA{:/}
 Lines | ```
 N TIUD12,TIUD13,TIUEBY,TIUAUT,TIUECS S TIUY=1
 S TIUD12=$G(^TIU(8925,TIUDA,12)),TIUD13=$G(^(13))
 S TIUEBY=$P(TIUD13,U,2),TIUAUT=$P(TIUD12,U,2),TIUECS=$P(TIUD12,U,8)
 I $D(^TIU(8925,"ASAVE",+DUZ,TIUDA)) D  Q
 . S TIUY="0^You appear to have been disconnected..."
 I DUZ'=TIUEBY,(TIUEBY'=TIUAUT),$D(^TIU(8925,"ASAVE",+TIUEBY,TIUDA)) D  Q
 . S TIUY="0^The transcriber appears to have been disconnected..."
 I DUZ'=TIUAUT,$D(^TIU(8925,"ASAVE",+TIUAUT,TIUDA)) D  Q
 . S TIUY="0^The author appears to have been disconnected..."
 I DUZ'=TIUECS,$D(^TIU(8925,"ASAVE",+TIUECS,TIUDA)) D  Q
 . S TIUY="0^The expected cosigner appears to have been disconnected..."```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}TIUDA{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the Internal Entry Number of the Document in the TIU Document File(#8925).{:/} | 




 Generated on January 13th 2017, 6:55:29 am