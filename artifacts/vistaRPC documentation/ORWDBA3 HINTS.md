---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDBA3 HINTS 

 property | value 
--- | --- 
 label | ORWDBA3 HINTS
 tag | HINTS
 routine | [ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html)
 return value type | ARRAY
 description | Returns an array of 'Hints' for Treatment Factors for CPRS CI/BA Project.


### Method description

 property | value 
--- | --- 
 Method comment | Return HINTS for ORBA Treatment Factors - used by Delphi
 Leading comment lines | The hints returned in the Y array will be used in the CPRS GUI and,displayed on fly-over of the cursor over the TxF text in the window,Input,<none>,Output,Y array of the hints for TxF's> Y(#)=TxFA ^ TxF line # ^ hint text,where TxFA is Treatment Factor acronym, e.g., CV=Combat Veteran,Variables,CT      = line number count, used in Y(#) where #=CT,I       = incrementor index #,ORTFIEN = the IEN for the TxF in the Help Frame (^DIC(9.2)) file,TF      = TxF acronym,TFLN    = TxF text line number, e.g., ^DIC(9.2,ORTFIEN,1,TFLN,0),TFS     = string of TxF acronyms,TFV     = TxF description/text




 ###### Generated on January 11th 2017, 6:39:43 am