---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SPN LAB MICRO URINE 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SPN LAB MICRO URINE{:/}
 tag | {::nomarkdown}COL{:/}
 routine | [SPNRPCE](http://code.osehra.org/dox/Routine_SPNRPCE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC supports the Microbiology, Urine subscreen of the LaboratoryResults section of the Urinary Tract Infections report. Calling the line tag COL will generate all Lab Microbiology Urine tests onfile from the cut off date forward. The results are first placed into ^UTILITY($J), andthen sorted into reverse date order and placed into ^TMP($J) To call this RPC, simply DOCOL(,DFN,CUTDATE) , where DFN = Internal Entry Number of patient in the PATIENT file (#2) CUTDATE = Cut off date. Results are inclusive from cut off date to present  Sample data stream, using first item:  Piece  1 is Accession --> MI 98 6158  (Accession is the Lab's tracking number)  2 is Date/time Received --> OCT 27, 1998@14:06:48  3 is Collection Sample --> URINE;CLEAN CATCH MIDSTREAM  4 is Report Status --> Final  5 is Report Date Approved --> OCT 29, 1998  6 is Site/Specimen --> URINE  7 & 8 are for troubleshoting only.        In addition, there is report text in the \TXT\ string. Note thatthe \TXT\ subscript may have multiple lines, and that some tests do nothave remarks.  This subscript is from the BACT RPT REMARK multiple inVista (subfield 13 of field 5 in LAB DATA file {#63}). This global was ran using the dfn of 42729 at the Bay Pines test acct.  ^TMP(541078638,\MICRO URINE\,1) = MI 00 3671^JUL 17, 2000@12:19:49^URINE; CLEAN CATCH MIDSTREAM^Final^JUL 18, 2000^URINE^^LR(53,6999281.878085^^TMP(541078638,\MICRO URINE\,1,\TXT\,1) = BACT RPT REMARK 1^NO GROWTH (<1000 CFU /ML) ^^TMP(541078638,\MICRO URINE\,1,\TXT\,2) = BACT RPT REMARK 2^THIS IS THE BACT RPT REMARD ^^TMP(541078638,\MICRO URINE\,1,\TXT\,3) = BACT RPT REMARK 3^AND THIS IS LINE 3 OF THE BACT REPT REMARKS ^^TMP(541078638,\MICRO URINE\,1,\TXT\,4) = BACT RPT REMARK 4^AND ONE MORE LINE FOR THE GIVE OF IT ^^TMP(541078638,\MICRO URINE\,1,\TXT\,5) = BACT RPT REMARK 5^AND THE LAST ONE ^^TMP(541078638,\MICRO URINE\,2) = MI 99 4202^JUL 15,1999@17:54:21^URINE^Final^JUL 17, 1999^URINE^^LR(53,7009283.824579^^TMP(541078638,\MICRO URINE\,2,\TXT\,1) = BACT RPT REMARK 1^SPECIMEN GROSSLY CONTAMINATED WITH 3 OR MORE ORGANISM: RESUBMIT ^{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}CUTDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}