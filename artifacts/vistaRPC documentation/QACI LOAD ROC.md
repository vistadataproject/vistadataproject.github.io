---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; QACI LOAD ROC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}QACI LOAD ROC{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [QACI4](http://code.osehra.org/dox/Routine_QACI4_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC assumes that the user has previously run the option QACI MIGRATION DATA BUILD to build the list of data to be migrated. You will call this RPC multiple times in a loop. You can tell when all of the ROCs have been processed when the output list comes back empty. So you would do the following in the Java calling code:1) Call the RPC using VistALink. (On the first call, the input array willbe empty).2) Check the output list from the RPC. If empty, you're done.3) Otherwise, pass the list returned by the RPC to the Oracle procedure toupdate the ROCs.4) Move the output from the Oracle procedure into the array that will be used as input to the next RPC call, then return to step 1. Each entry in the output list from this RPC contains up-arrow delimitedstrings of ROC data. The data tells the procedure both what ROC number it belongs to, and the type of data. The data for the main table comes first,followed by the issue text entries, the resolution text entries, and themethod-of-contact entries.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATSLIST{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}If defined, contains a list of ROC numbers for the previous group of ROCsthat was migrated from VistA to the Oracle table. {:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}