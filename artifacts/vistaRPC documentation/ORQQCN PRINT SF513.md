---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQQCN PRINT SF513 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQQCN PRINT SF513{:/}
 tag | {::nomarkdown}PRT513{:/}
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | PRT513^[ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 Method comment | Print SF513 to VistA device from GUI
 Input parameters | {::nomarkdown}GMRCO<br/>GMRCCHT<br/>GMRCDEV{:/}
 Code | ```  N ORSTATUS
 D EN^GMRCP5(GMRCO,GMRCCHT,GMRCDEV,.ORSTATUS)
 S Y=ORSTATUS```




 Generated on January 14th 2017, 7:26:35 am