---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDBA3 HINTS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDBA3 HINTS{:/}
 tag | {::nomarkdown}HINTS{:/}
 routine | [ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array of 'Hints' for Treatment Factors for CPRS CI/BA Project.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | HINTS^[ORWDBA3](http://code.osehra.org/dox/Routine_ORWDBA3_source.html)
 Method comment | Return HINTS for ORBA Treatment Factors - used by Delphi
 First comment | {::nomarkdown}The hints returned in the Y array will be used in the CPRS GUI and<br/>displayed on fly-over of the cursor over the TxF text in the window<br/>Input<br/><none><br/>Output<br/>Y array of the hints for TxF's> Y(#)=TxFA ^ TxF line # ^ hint text<br/>where TxFA is Treatment Factor acronym, e.g., CV=Combat Veteran<br/>Variables<br/>CT      = line number count, used in Y(#) where #=CT<br/>I       = incrementor index #<br/>ORTFIEN = the IEN for the TxF in the Help Frame (^DIC(9.2)) file<br/>TF      = TxF acronym<br/>TFLN    = TxF text line number, e.g., ^DIC(9.2,ORTFIEN,1,TFLN,0)<br/>TFS     = string of TxF acronyms<br/>TFV     = TxF description/text{:/}
 Code | ```  N CT,I,ORTFIEN,TF,TFLN,TFS,TFV<br/> S TFS="SC^MST^AO^IR^EC^HNC^CV^SHD",CT=0<br/> F I=1:1 S TF=$P(TFS,U,I) Q:TF=""  D<br/> . S ORTFIEN=$O(^DIC(9.2,"B","ORBA-"_TF,"")),TFV="",TFLN=0<br/> . ; Get next line of hint text<br/> . F  S TFLN=$O(^DIC(9.2,ORTFIEN,1,TFLN)) Q:'TFLN  D<br/> .. S CT=CT+1,Y(CT)=TF_U_TFLN_U_^DIC(9.2,ORTFIEN,1,TFLN,0)```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}