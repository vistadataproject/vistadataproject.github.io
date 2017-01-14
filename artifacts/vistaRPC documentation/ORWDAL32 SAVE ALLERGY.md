---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 SAVE ALLERGY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SAVE ALLERGY{:/}
 tag | {::nomarkdown}EDITSAVE{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | EDITSAVE^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Save Edit/Add of an allergy/adverse reaction
 First comment | {::nomarkdown}following patch check is made via GUI RPC call to ORWU PATCH instead<br/>I '$$PATCH^XPDUTL("GMRA*4.0*21") S Y="-1^Not yet implemented" Q{:/}
 Input parameters | {::nomarkdown}ORALIEN<br>ORDFN<br>OREDITED{:/}
 Code | {::nomarkdown}  N ORNODE<br> S ORNODE=$NAME(^TMP("GMRA",$J))<br> K @ORNODE M @ORNODE=OREDITED<br> S ORY=0<br> I $G(@ORNODE@("GMRAERR"))="YES" D EIE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Handle entered in error<br> I $G(@ORNODE@("GMRANKA"))="YES" D NKA^GMRAGUI1 Q<br> D UPDATE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Add/edit reactions{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}