---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDXVB SUBCHK 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB SUBCHK{:/}
 tag | {::nomarkdown}SUBCHK{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if selected test is a Blood Component or a Diagnostic Test.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | SUBCHK^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Check to see if selected test is a Blood Component or a Diagnostic Test
 Input parameters | {::nomarkdown}TSTNM{:/}
 Code | ```  S OROOT=""
 Q:'$L($G(TSTNM))
 I $O(^ORD(101.43,"S.VBT",TSTNM,0)) S OROOT="t"
 I $O(^ORD(101.43,"S.VBC",TSTNM,0)) S OROOT="c"```




 Generated on January 14th 2017, 7:26:36 am