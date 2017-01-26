---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQPT DEFAULT LIST SORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQPT DEFAULT LIST SORT{:/}
 tag | {::nomarkdown}DEFSORT{:/}
 routine | [ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Returns the current user's default patient selection list SORT ORDERsetting.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DEFSORT^[ORQPTQ11](http://code.osehra.org/dox/Routine_ORQPTQ11_source.html)
 Method comment | Return user's default sort.
 First comment | {::nomarkdown}<pre> SLC/PKS - 4/6/2001<br/></pre>{:/}
 Code | {::nomarkdown}  N ORSORT,ORSECT,ORPARAM<br> I ('$D(DUZ)) S Y="Unable to determine DUZ." Q<br> S ORSECT=$G(^VA(200,DUZ,5))<br> I +ORSECT>0 S ORSECT=$P(ORSECT,U)<br> S Y="A" ; Default of "Alpha" sort.<br> S ORPARAM="ORLP DEFAULT LIST ORDER"<br> S ORSORT=$$GET^XPAR("USR^SRV.`"_$G(ORSECT)_"^DIV^SYS^PKG",ORPARAM,1,"I")<br> I (ORSORT'="") S Y=ORSORT{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCore.pas">rCore.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:44 pm</p>{:/}