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
 Lines | ```
 N IMGID,BEG,END,MAX
 S IMGID=0,Y=""
 S IMGID=$O(^ORD(101.24,"B","ORRP IMAGING",0))
 D GETINDV(.Y,IMGID)
 I $L(Y) D
 . S BEG=$$DT^ORCHTAB1($P(Y,";"))
 . S END=$$DT^ORCHTAB1($P(Y,";",2))
 . S MAX=$P(Y,";",3)
 . S Y=BEG_"^"_END_"^"_MAX
 I Y="" D GETDEF^ORWRA(.Y)```




 Generated on January 13th 2017, 6:55:29 am