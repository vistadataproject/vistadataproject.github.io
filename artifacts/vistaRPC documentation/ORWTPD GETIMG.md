---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWTPD GETIMG 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWTPD GETIMG{:/}
 tag | {::nomarkdown}GETIMG{:/}
 routine | [ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | GETIMG^[ORWTPD](http://code.osehra.org/dox/Routine_ORWTPD_source.html)
 Method comment | Get Image (local only) Time/Occ
 Input parameters | {::nomarkdown}RPT{:/}
 Code | ```  N IMGID,BEG,END,MAX
 S IMGID=0,Y=""
 S IMGID=$O(^ORD(101.24,"B","ORRP IMAGING",0))
 D GETINDV(.Y,IMGID)
 I $L(Y) D
 . S BEG=$$DT^ORCHTAB1($P(Y,";"))
 . S END=$$DT^ORCHTAB1($P(Y,";",2))
 . S MAX=$P(Y,";",3)
 . S Y=BEG_"^"_END_"^"_MAX
 I Y="" D GETDEF^ORWRA(.Y)```




 Generated on January 14th 2017, 7:26:35 am