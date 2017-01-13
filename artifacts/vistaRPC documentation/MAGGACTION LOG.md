---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGGACTION LOG 

 property | value 
--- | --- 
 label | {::nomarkdown}MAGGACTION LOG{:/}
 tag | {::nomarkdown}LOGACT{:/}
 routine | [MAGGTU6](http://code.osehra.org/dox/Routine_MAGGTU6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Call from Delphi to log an action performed on the image. Actions are logged the IMAGE ACCESS LOG file  ^MAG(2006.95{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}'^' delimited string contains the following:'^' piece     description   1   ACCESS TYPE -  A|B|C|D|E   2   USER        -  DUZ   3   IMAGE       -  MAGIEN   4   USER INTERFACE SOFTWARE   - STRING   5   PATIENT     -  DFN   6   IMAGE COUNT   7   ADDITIONAL DATA{:/} | 




 Generated on January 13th 2017, 6:15:57 am