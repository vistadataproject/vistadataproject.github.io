---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB SUBCHK 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB SUBCHK{:/}
 tag | {::nomarkdown}SUBCHK{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if selected test is a Blood Component or a Diagnostic Test.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Check to see if selected test is a Blood Component or a Diagnostic Test
 Input Parameters | {::nomarkdown}TSTNM{:/}
 Lines | ```{::nomarkdown} S OROOT=""<br/> Q:'$L($G(TSTNM))<br/> I $O(^ORD(101.43,"S.VBT",TSTNM,0)) S OROOT="t"<br/> I $O(^ORD(101.43,"S.VBC",TSTNM,0)) S OROOT="c"```{:/}




 Generated on January 13th 2017, 7:11:27 am