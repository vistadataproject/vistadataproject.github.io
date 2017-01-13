---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROI STBLFLG SET BILL FLAG 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIROI STBLFLG SET BILL FLAG{:/}
 tag | {::nomarkdown}STBLFLG{:/}
 routine | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This routine checks the requestor attached to a request to see if there are any outstanding bills other than the current request. {:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the IEN of the request whose reqyestor is being checked for an outstanding balance.{:/} | 




 Generated on January 13th 2017, 5:52:13 am