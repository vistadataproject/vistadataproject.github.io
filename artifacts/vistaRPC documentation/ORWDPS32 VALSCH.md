---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 VALSCH 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 VALSCH{:/}
 tag | {::nomarkdown}VALSCH{:/}
 routine | [ORWDPS33](http://code.osehra.org/dox/Routine_ORWDPS33_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Validate a schedule and return a 1 if it is valid, otherwise return 0.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | validate a schedule, return 1 if valid, 0 if not
 Input Parameters | {::nomarkdown}X<br/>PSTYPE{:/}
 Lines | {::nomarkdown} I '$L($T(EN^PSSGSGUI)) S OK=-1 Q<br/> I $E($T(EN^PSSGSGUI),1,4)="EN(X" D<br/> . N ORX S ORX=$G(X) D EN^PSSGSGUI(.ORX,$G(PSTYPE,"I"))<br/> . K X S:$D(ORX) X=ORX<br/> E  D<br/> . D EN^PSSGSGUI<br/> S OK=$S($D(X):1,1:0)<br/>{:/}




 Generated on January 13th 2017, 7:15:27 am