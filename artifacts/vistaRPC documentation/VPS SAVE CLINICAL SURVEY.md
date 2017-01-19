---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS SAVE CLINICAL SURVEY 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS SAVE CLINICAL SURVEY{:/}
 tag | {::nomarkdown}SAVE{:/}
 routine | [VPSSRVY1](http://code.osehra.org/dox/Routine_VPSSRVY1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC will return success flag (1) or error flag (-1^error message)VPSDFN  : Patient IENVPSDATA : Array of field-value pair to store    Format : VPSDATA(1..n)=FIELD-NAME^SEQ#^FIELD-VALUE    Example:                        Survey Name            VPSDATA(1) = NAME^^Survey #1                         Survey Internal Name            VPSDATA(2) = INTERNAL^^Survey Internal #1                         Questionnaire Template ID            VPSDATA(3) = TEMPLATE ID^^5                            Survey Version            VPSDATA(4) = VERSION^^10                           Date/Time Survey was taken                                VPSDATA(5) = DATE/TIME TAKEN^^9/24/2014@093001                         Date/Time Survey was modified            VPSDATA(6) = DATE/TIME MODIFIED^^12/31/2014@153301                        Completion STATUS (C=Completed, I=Incomplete)            VPSDATA(7) = STATUS^^C                        DUZ of INTERVIEWER            VPSDATA(8) = INTERVIEWER^^4667                        Patient Safety (N=NO, Y=YES)            VPSDATA(9) = SAFETY^^Y                         Immediate Action (N=NO, Y=YES)                                  VPSDATA(10)= ACTION^^Y                         Survey Calculated Value                                   The SURVEY CALC field is used to store overall survey             calculated values in a delimted string.  The string             format is as follows:                         OVERALL SURVEY CALCULATED^CALCULATION LABEL_1;VALUE_1~CALCULATION LABEL_2;VALUE_2~~CALCULATION LABEL_NN;CALCULATION VALUE_NN                                   VPSDATA(11)= SURVEY CALC^^435.9^SCORE;89.5~AVG RATE;24~AVG NO COMPLETE;7OUTPUT  VPSRES =  1                   (Survey is stored successully)           -1^Error Message     (Survey is not stored because an Error) LABEL_NN;CALCULATION VALUE_NN                             VPSDATA(11)= SURVEY CALC^^435.9^SCORE;89.5~AVG RATE;24~AVG NO COMPLETE;7\                       DUZ of survey creator                     VPSDATA(12)= CREATOR^^45465              Multiple Questions            VPSDATA(13)= QUESTION^1^Enter Your Name:            VPSDATA(14)= QUESTION^2^Do you feel the doctor qualify?            VPSDATA(15)= QUESTION^3^Rate visit (1-10) 1=Bad, 10:GREAT?   Multiple Response            VPSDATA(16)= RESPONSE^1^MCENROE,JOHN            VPSDATA(17)= RESPONSE^2^NO            VPSDATA(18)= RESPONSE^3^5   Multiple Survey Calculated Values            VPSDATA(19)= QUESTION CALC^1^Name: John McEnroe            VPSDATA(20)= QUESTION CALC^2^Dr. Carter is not qualified to treat my illness            VPSDATA(21)= QUESTION CALC^3^I rated my visit as unsatisfactory OUTPUT  VPSRES =  1                   (Survey is stored successully)           -1^Error Message     (Survey is not stored because an Error){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID (DFN) who enters the Clinical Survey Questionannire {:/} | 
| {::nomarkdown}VPSDATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}255{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array of Data containing Clinical Survey Questionnaire to be stored in VistA.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:35 am</p>{:/}