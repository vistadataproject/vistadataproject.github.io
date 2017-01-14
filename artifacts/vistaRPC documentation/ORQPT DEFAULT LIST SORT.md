---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT LIST SORT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT LIST SORT{:/}
 tag | {::nomarkdown}DEFSORT{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the current user's default patient selection list SORT ORDERsetting.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return user's default sort.
 Lines | {::nomarkdown} N ORSORT,ORSECT,ORPARAM<br/> I ('$D(DUZ)) S Y="Unable to determine DUZ." Q<br/> S ORSECT=$G(^VA(200,DUZ,5))<br/> I +ORSECT>0 S ORSECT=$P(ORSECT,U)<br/> S Y="A" ; Default of "Alpha" sort.<br/> S ORPARAM="ORLP DEFAULT LIST ORDER"<br/> S ORSORT=$$GET^XPAR("USR^SRV.`"_$G(ORSECT)_"^DIV^SYS^PKG",ORPARAM,1,"I")<br/> I (ORSORT'="") S Y=ORSORT{:/}
 Leading comment lines | {::nomarkdown}SLC/PKS - 4/6/2001{:/}




 Generated on January 13th 2017, 7:15:28 am