---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDAL32 SAVE ALLERGY 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDAL32 SAVE ALLERGY{:/}
 tag | {::nomarkdown}EDITSAVE{:/}
 routine | [ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | Save Edit/Add of an allergy/adverse reaction
 Input Parameters | {::nomarkdown}ORALIEN<br/>ORDFN<br/>OREDITED{:/}
 Lines | {::nomarkdown} N ORNODE<br/> S ORNODE=$NAME(^TMP("GMRA",$J))<br/> K @ORNODE M @ORNODE=OREDITED<br/> S ORY=0<br/> I $G(@ORNODE@("GMRAERR"))="YES" D EIE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Handle entered in error<br/> I $G(@ORNODE@("GMRANKA"))="YES" D NKA^GMRAGUI1 Q<br/> D UPDATE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Add/edit reactions{:/}
 Leading comment lines | {::nomarkdown}following patch check is made via GUI RPC call to ORWU PATCH instead<br/>I '$$PATCH^XPDUTL("GMRA*4.0*21") S Y="-1^Not yet implemented" Q{:/}




 Generated on January 13th 2017, 7:15:28 am