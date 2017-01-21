---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MDCP UPDATE MESSAGE STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MDCP UPDATE MESSAGE STATUS{:/}
 tag | {::nomarkdown}UPDATERP{:/}
 routine | [MDCPHL7B](http://code.osehra.org/dox/Routine_MDCPHL7B_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call will update the status of an entry in file 704.002(the CLIO_HL7_LOG file).  Note that if the status passed through is 'PROCESSED', the CP INSTRUMENT file entry pointed to by field .03 will be checked to see if it has a routine in its .11 field.  If it does, the HL7 message will be copied to a temp global and the PROCESSING ROUTINE will be invoked.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MDCPMSG{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}The IFN of the message in the CP RESULT REPORT file.{:/} | 
| {::nomarkdown}MDCPSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The status to which to change the file entry referenced by the first parameter.  Check the data dictionary for field .09 to get a list of valid codes.  This parameter must be in internal format.{:/} | 
| {::nomarkdown}MDCPDFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the IFN of the patient in file 2, if available.{:/} | 
| {::nomarkdown}MDCPISCR{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}If MDCPDFN is set, this tells the linetag that MDCPDFN is a correction, not the original DFN.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}