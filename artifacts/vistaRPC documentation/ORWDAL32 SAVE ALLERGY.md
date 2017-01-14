---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDAL32 SAVE ALLERGY 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SAVE ALLERGY{:/}
 tag | {::nomarkdown}EDITSAVE{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | EDITSAVE^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Save Edit/Add of an allergy/adverse reaction
 First comment | {::nomarkdown}following patch check is made via GUI RPC call to ORWU PATCH instead<br/>I '$$PATCH^XPDUTL("GMRA*4.0*21") S Y="-1^Not yet implemented" Q{:/}
 Input parameters | {::nomarkdown}ORALIEN<br/>ORDFN<br/>OREDITED{:/}
 Code | ```  N ORNODE
 S ORNODE=$NAME(^TMP("GMRA",$J))
 K @ORNODE M @ORNODE=OREDITED
 S ORY=0
 I $G(@ORNODE@("GMRAERR"))="YES" D EIE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Handle entered in error
 I $G(@ORNODE@("GMRANKA"))="YES" D NKA^GMRAGUI1 Q
 D UPDATE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Add/edit reactions```




 Generated on January 14th 2017, 7:26:36 am