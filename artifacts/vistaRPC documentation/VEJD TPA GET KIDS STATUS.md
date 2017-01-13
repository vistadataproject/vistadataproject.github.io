---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VEJD TPA GET KIDS STATUS 

 property | value 
--- | --- 
 label | {::nomarkdown}VEJD TPA GET KIDS STATUS{:/}
 tag | {::nomarkdown}KID{:/}
 routine | [VEJDTP01](http://code.osehra.org/dox/Routine_VEJDTP01_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This does a Fileman lookup on the INSTALL file and returns the last entryfor the value passed.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Enter the name of the KIDS build for which you which to see itsinstallation state.  Pass the name of the KIDS build as it appears in theINSTALL file.  You may pass a partial name, but this call will only returnthe data on the last entry installed{:/} | 




 Generated on January 13th 2017, 6:55:29 am