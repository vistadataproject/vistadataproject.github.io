---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB SUBCHK 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB SUBCHK{:/}
 tag | {::nomarkdown}SUBCHK{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Check to see if selected test is a Blood Component or a Diagnostic Test.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | SUBCHK^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Check to see if selected test is a Blood Component or a Diagnostic Test
 Input parameters | {::nomarkdown}TSTNM{:/}
 Code | {::nomarkdown}  S OROOT=""<br> Q:'$L($G(TSTNM))<br> I $O(^ORD(101.43,"S.VBT",TSTNM,0)) S OROOT="t"<br> I $O(^ORD(101.43,"S.VBC",TSTNM,0)) S OROOT="c"{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}