---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT LIST SORT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT LIST SORT{:/}
 tag | {::nomarkdown}DEFSORT{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the current user's default patient selection list SORT ORDERsetting.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEFSORT^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | Return user's default sort.
 First comment | {::nomarkdown}SLC/PKS - 4/6/2001{:/}
 Code | ```  N ORSORT,ORSECT,ORPARAM
 I ('$D(DUZ)) S Y="Unable to determine DUZ." Q
 S ORSECT=$G(^VA(200,DUZ,5))
 I +ORSECT>0 S ORSECT=$P(ORSECT,U)
 S Y="A" ; Default of "Alpha" sort.
 S ORPARAM="ORLP DEFAULT LIST ORDER"
 S ORSORT=$$GET^XPAR("USR^SRV.`"_$G(ORSECT)_"^DIV^SYS^PKG",ORPARAM,1,"I")
 I (ORSORT'="") S Y=ORSORT```




 Generated on January 14th 2017, 7:26:35 am