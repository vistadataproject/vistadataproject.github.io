---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQCN PRINT SF513 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN PRINT SF513{:/}
 tag | {::nomarkdown}PRT513{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Print SF513 to VistA device from GUI
 Input Parameters | {::nomarkdown}GMRCO<br/>GMRCCHT<br/>GMRCDEV{:/}
 Lines | ```
 N ORSTATUS
 D EN^GMRCP5(GMRCO,GMRCCHT,GMRCDEV,.ORSTATUS)
 S Y=ORSTATUS```




 Generated on January 13th 2017, 6:55:29 am