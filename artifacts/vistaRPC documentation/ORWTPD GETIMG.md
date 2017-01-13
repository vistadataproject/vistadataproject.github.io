---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWTPD GETIMG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETIMG{:/}
 tag | {::nomarkdown}GETIMG{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Get Image (local only) Time/Occ
 Input Parameters | {::nomarkdown}RPT{:/}
 Lines | ```{::nomarkdown} N IMGID,BEG,END,MAX<br/> S IMGID=0,Y=""<br/> S IMGID=$O(^ORD(101.24,"B","ORRP IMAGING",0))<br/> D GETINDV(.Y,IMGID)<br/> I $L(Y) D<br/> . S BEG=$$DT^ORCHTAB1($P(Y,";"))<br/> . S END=$$DT^ORCHTAB1($P(Y,";",2))<br/> . S MAX=$P(Y,";",3)<br/> . S Y=BEG_"^"_END_"^"_MAX<br/> I Y="" D GETDEF^ORWRA(.Y)```{:/}




 Generated on January 13th 2017, 7:11:27 am