---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETIMG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETIMG{:/}
 tag | {::nomarkdown}GETIMG{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | GETIMG^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get Image (local only) Time/Occ
 Input parameters | {::nomarkdown}RPT{:/}
 Code | {::nomarkdown}  N IMGID,BEG,END,MAX<br> S IMGID=0,Y=""<br> S IMGID=$O(^ORD(101.24,"B","ORRP IMAGING",0))<br> D GETINDV(.Y,IMGID)<br> I $L(Y) D<br> . S BEG=$$DT^ORCHTAB1($P(Y,";"))<br> . S END=$$DT^ORCHTAB1($P(Y,";",2))<br> . S MAX=$P(Y,";",3)<br> . S Y=BEG_"^"_END_"^"_MAX<br> I Y="" D GETDEF^ORWRA(.Y){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}