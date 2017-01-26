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

 Property | Value 
 --- | --- 
 Method | EDITSAVE^[ORWDAL32](http://code.osehra.org/dox/Routine_ORWDAL32_source.html)
 Method comment | Save Edit/Add of an allergy/adverse reaction
 Input parameters | {::nomarkdown}ORALIEN, ORDFN, OREDITED{:/}
 First comment | {::nomarkdown}<pre>following patch check is made via GUI RPC call to ORWU PATCH instead<br/>I '$$PATCH^XPDUTL("GMRA*4.0*21") S Y="-1^Not yet implemented" Q</pre>{:/}
 Code | {::nomarkdown}  N ORNODE<br> S ORNODE=$NAME(^TMP("GMRA",$J))<br> K @ORNODE M @ORNODE=OREDITED<br> S ORY=0<br> I $G(@ORNODE@("GMRAERR"))="YES" D EIE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Handle entered in error<br> I $G(@ORNODE@("GMRANKA"))="YES" D NKA^GMRAGUI1 Q<br> D UPDATE^GMRAGUI1(ORALIEN,ORDFN,ORNODE) Q  ;Add/edit reactions{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODAllergy.pas">Orders/rODAllergy.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}