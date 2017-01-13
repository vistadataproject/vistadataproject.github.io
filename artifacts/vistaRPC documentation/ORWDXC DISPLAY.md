---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXC DISPLAY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXC DISPLAY{:/}
 tag | {::nomarkdown}DISPLAY{:/}
 routine | [ORWDXC](http://code.osehra.org/dox/Routine_ORWDXC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Return list of Order Checks for a FillerID (namespace).{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return list of Order Checks for a FillerID (namespace)
 Input Parameters | {::nomarkdown}DFN<br/>FID{:/}
 Lines | ```
 N I,ORX,ORY
 S ORX=1,ORX(1)="|"_FID
 D EN^ORKCHK(.ORY,DFN,.ORX,"DISPLAY")
 S I=0 F  S I=$O(ORY(I)) Q:I'>0  S LST(I)=$P(ORY(I),U,4)```




 Generated on January 13th 2017, 6:55:29 am