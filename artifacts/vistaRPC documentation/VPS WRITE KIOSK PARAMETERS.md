---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS WRITE KIOSK PARAMETERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS WRITE KIOSK PARAMETERS{:/}
 tag | {::nomarkdown}WRITE{:/}
 routine | [VPSPARAM](http://code.osehra.org/dox/Routine_VPSPARAM_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Called by the VetLink Kiosk system. This RPC will accept three inputparameters and will return result output when processing complete. Theinput parameters are Kiosk Group (literal value) and the changed configuration values (array) Kiosk Group: when an administrator of VetLink Kiosk is making any Kiosk             configuration changes, he/she is making changes for a Kiosk Group.Each element in the array is constructed as:        array(n)  = field label^field value        where      n           : an incremental number that acts as an index                   field label : the name of VistA Field Name                   field value : the parameter value to be stored in VistA The output result has similar array structure as the array(n) with an additionof the result code and potential exception messageSuccessful output structure is constructed as:       output(n)  = field label^field value^1                    value '1' at the end indicates the field value was stored                     successfullyFailed output structure is constructed as:       output(n)  = field label^field value^99^exception message                    value '99' at the end indicates either field label doesn't                    exist in VistA or the field value is invalid.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAMNAM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}When An Administrator of VetLink Kiosk system made anyconfiguration changes, the changes were made against this Kiosk Group or Clinic{:/} | 
| {::nomarkdown}PARAMETERS{:/} | {::nomarkdown}LIST{:/} |  |  | {::nomarkdown}A subscripted array that represents the list of parameter changes to the VetLink's Kiosk Configuration.Each element in the subscripted array is constructed as:PARAMETERS(n) = field label^field value        where   n           : an incremental number that acts as an index                field label : the name of VistA Field Name                field value : the parameter value to be stored in VistA{:/} | 
| {::nomarkdown}PARAMTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains either 'K' for KIOSK GROUP or 'C' for CLINIC.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}