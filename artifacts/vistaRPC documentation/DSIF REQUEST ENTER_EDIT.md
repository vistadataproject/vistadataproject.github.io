---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF REQUEST ENTER_EDIT 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF REQUEST ENTER_EDIT{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [DSIFNOT6](http://code.osehra.org/dox/Routine_DSIFNOT6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC duplicates the logic from FBCHREQ* routines and the FBCH ENTER REQUEST input template.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number to file 162.2 (Enter mode when false, Edit mode when true){:/} | 
| {::nomarkdown}REQDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Request Date/Time (Required on enter, optional on edit){:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient IEN (Required on enter, optional on edit){:/} | 
| {::nomarkdown}VEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Vendor IEN (Required on enter, optional on edit){:/} | 
| {::nomarkdown}WHO{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Person Who Called (Optional - Free Text 3 to 30 Characters){:/} | 
| {::nomarkdown}ADMDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Admission Date/Time (Required on enter, optional on edit){:/} | 
| {::nomarkdown}AUTHDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorized From Date/Time (Optional - Default is ADMDT){:/} | 
| {::nomarkdown}ADMDX{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}45{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Admitting Diagnosis (Optional - Free Text 3 to 45 Characters){:/} | 
| {::nomarkdown}ATPHY{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Attending Physician (Optional - Free Text 3 to 30 Characters){:/} | 
| {::nomarkdown}PHYPH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Attending Physicians Phone Number (Optional - Free Text 3 to 20 Characters){:/} | 
| {::nomarkdown}TOC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Type of Contact (Optional - T : Telephone, P - Personal){:/} | 
| {::nomarkdown}REFPROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Referring provider, pointer to file 200.  \@\ can be passed in for deletion.{:/} | 




 Generated on January 13th 2017, 7:11:27 am