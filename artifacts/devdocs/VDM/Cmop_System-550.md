---
layout: default
title: VDM
---

#### [Developer Documentation](../index) &#187; [VDM](TableOfContents) &#187; Cmop_System-550<br/>
<a name="top"></a>
# Cmop System (550)
The system parameters in this file manage operations of the Consolidated  Mail Outpatient Pharmacy for the medical center. This information controls the transmission of data to the Consolidated Mail Outpatient Pharmacy host facility selected by the medical center. Information in this file  must be entered or edited ONLY through the Consolidated Mail Outpatient  Pharmacy package options.

**Global:** ^PSX(550,

**Domain:** Non-Clinical

## Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**System**{::nomarkdown}<pre><code>  system</code></pre>{:/} | .01 | This is the free text name of the CMOP system. | STRING | INDEXED<br/>REQUIRED | 
**Status**{::nomarkdown}<pre><code>  status</code></pre>{:/} | 1 | The current processing status of this facility.  ACTIVE <br/>status indicates the facility is participating in transmitting data<br/>to the CMOP.  INACTIVE status indicates that CMOP processing is not <br/>currently available.<br/> 'N' for 'Active Non-CS only'<br/> 'C' for 'Active CS only'<br/> 'B' for 'Active both CS and Non-CS' | ENUMERATION | INDEXED | {::nomarkdown}ACTIVE: <em><strong>A</strong></em><br/>INACTIVE: <em><strong>I</strong></em>{:/}
**Xmit Status**{::nomarkdown}<pre><code>  xmit_status</code></pre>{:/} | 2 |  <br/>This field contains a set of codes indicating the current status of the<br/>job which transmits data to the CMOP.  Only one transmission may process<br/>at a given time. | ENUMERATION | INDEXED | {::nomarkdown}DATA RECOVERY : <em><strong>R</strong></em><br/>NO CURRENT TRANSMISSION: <em><strong>H</strong></em><br/>TRANSMITTING DATA: <em><strong>T</strong></em>{:/}
**Cmop Domain**{::nomarkdown}<pre><code>  cmop_domain</code></pre>{:/} | 3 | This is a valid MailMan domain for the Consolidated Mail Outpatient<br/>Pharmacy system receiving the facility-transmitted data. | POINTER | REQUIRED | [Domain-4_2](Domain-4_2)
**Activate/inactivate Dt/tm**{::nomarkdown}<pre><code>  activate_inactivate_dt_tm</code></pre>{:/} | 4 | The date/time of the Activate/Inactivate action. | OBJECT |  | [Activate_inactivate_Dt_tm-550_04](#Activate_inactivate_Dt_tm-550_04)
**Last Batch Transmitted**{::nomarkdown}<pre><code>  last_batch_transmitted</code></pre>{:/} | 6 | The batch number of the last completed transmission. | POINTER |  | Cmop_Transmission-550_2
**Auto Transmit**{::nomarkdown}<pre><code>  auto_transmit</code></pre>{:/} | 7 |  | OBJECT |  | [Auto_Transmit-550_07](#Auto_Transmit-550_07)
**Purge Dt/tm**{::nomarkdown}<pre><code>  purge_dt_tm</code></pre>{:/} | 8 |  | OBJECT |  | [Purge_Dt_tm-550_08](#Purge_Dt_tm-550_08)
**Task Number**{::nomarkdown}<pre><code>  task_number</code></pre>{:/} | 9 | The task number of the currently running transmission job. | NUMERIC | INDEXED | 
**Auto Transmit Cs**{::nomarkdown}<pre><code>  auto_transmit_cs</code></pre>{:/} | 10 | This multiple is used to track and control the background jobs that<br/>gather and transmit CMOP controlled substance prescription transmissions. | OBJECT |  | [Auto_Transmit_Cs-550_09](#Auto_Transmit_Cs-550_09)
**Non-cs Days To Transmit**{::nomarkdown}<pre><code>  noncs_days_to_transmit</code></pre>{:/} | 11 | The number of days into the future the NON-CS process will look to pick up<br/>prescriptions for a patient already in the transmission. | NUMERIC |  | 
**Cs Days To Transmit**{::nomarkdown}<pre><code>  cs_days_to_transmit</code></pre>{:/} | 12 | The number of days into the future the CS process will look to pick up<br/>prescriptions for a patient already in the transmission. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>

## Sub-Files
### <a name="Activate_inactivate_Dt_tm-550_04"></a>Activate/inactivate Dt/tm (550.04)

<dl>
<dt>ID</dt><dd>Activate_inactivate_Dt_tm-550_04</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Activate/inactivate Dt/tm**{::nomarkdown}<pre><code>  activate_inactivate_dt_tm</code></pre>{:/} | .01 | The date/time of the Activate/Inactivate action.<br/>  | DATE-TIME | INDEXED<br/>REQUIRED | 
**Initiator**{::nomarkdown}<pre><code>  initiator</code></pre>{:/} | 1 | The person initiating this action. | POINTER |  | [New_Person-200](New_Person-200)
**Cmop Response Dt/tm**{::nomarkdown}<pre><code>  cmop_response_dt_tm</code></pre>{:/} | 2 | The date/time the CMOP responded to the request or notification. | DATE-TIME |  | 
**Cmop Response**{::nomarkdown}<pre><code>  cmop_response</code></pre>{:/} | 3 | This field describes the CMOP response to the request or notification. | ENUMERATION |  | {::nomarkdown}DISAPPROVED: <em><strong>D</strong></em><br/>NOTIFICATION RECEIVED: <em><strong>N</strong></em><br/>APPROVED: <em><strong>A</strong></em><br/>PENDING: <em><strong>P</strong></em>{:/}
**Action Type**{::nomarkdown}<pre><code>  action_type</code></pre>{:/} | 4 | The type of action (Activate/Inactivate) for this entry. | ENUMERATION |  | {::nomarkdown}INACTIVATION NOTICE: <em><strong>I</strong></em><br/>ACTIVATION REQUEST: <em><strong>A</strong></em>{:/}
**Remote Initiator**{::nomarkdown}<pre><code>  remote_initiator</code></pre>{:/} | 5 | Name of the CMOP person who sent the message. | STRING |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Auto_Transmit-550_07"></a>Auto Transmit (550.07)

<dl>
<dt>ID</dt><dd>Auto_Transmit-550_07</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Auto Transmit**{::nomarkdown}<pre><code>  auto_transmit</code></pre>{:/} | .01 | A '1' in this field indicates the facility has currently scheduled<br/>background transmissions for CMOP processing. | ENUMERATION | REQUIRED | {::nomarkdown}YES: <em><strong>1</strong></em><br/>NO: <em><strong>2</strong></em>{:/}
**Queued To Begin**{::nomarkdown}<pre><code>  queued_to_begin</code></pre>{:/} | 1 | The date/time of the initial background transmission. | DATE-TIME |  | 
**Scheduling Frequency(hrs)**{::nomarkdown}<pre><code>  scheduling_frequencyhrs</code></pre>{:/} | 2 | This is the frequency (in hours) that the automatic processing will be<br/>rescheduled. | NUMERIC |  | 
**Next Transmission Time**{::nomarkdown}<pre><code>  next_transmission_time</code></pre>{:/} | 3 | This is the date/time of the next scheduled auto transmission. | DATE-TIME |  | 
**Scheduled By**{::nomarkdown}<pre><code>  scheduled_by</code></pre>{:/} | 5 | The name of the person who scheduled the automatic processing. | POINTER |  | [New_Person-200](New_Person-200)
**Task Number**{::nomarkdown}<pre><code>  task_number</code></pre>{:/} | 6 | This is the task number used to reschedule the job. | NUMERIC |  | 
**Number Of Days To Transmit**{::nomarkdown}<pre><code>  number_of_days_to_transmit</code></pre>{:/} | 7 | This number determines the number of days to add to the current date to<br/>calculate the transmit through date for CMOP auto transmissions. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Purge_Dt_tm-550_08"></a>Purge Dt/tm (550.08)

<dl>
<dt>ID</dt><dd>Purge_Dt_tm-550_08</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Purge Dt/tm**{::nomarkdown}<pre><code>  purge_dt_tm</code></pre>{:/} | .01 | Date/time the last purge by the CMOP background manager was completed. | DATE-TIME | INDEXED<br/>REQUIRED | 
**Total Orders Purged**{::nomarkdown}<pre><code>  total_orders_purged</code></pre>{:/} | 1 | This is the total records purged from the PSX(501 global. | NUMERIC |  | 
**Start Seq #**{::nomarkdown}<pre><code>  start_seq_number</code></pre>{:/} | 3 |  <br/>The starting message number of the data transmission. | NUMERIC |  | 
**End Seq #**{::nomarkdown}<pre><code>  end_seq_number</code></pre>{:/} | 4 |  <br/>The last message number of the data transmission. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>


### <a name="Auto_Transmit_Cs-550_09"></a>Auto Transmit Cs (550.09)

<dl>
<dt>ID</dt><dd>Auto_Transmit_Cs-550_09</dd></dl>

#### Properties

Label/Field Name | Field # | Description | Datatype | Attributes | Range
--- | --- | --- | --- | --- | ---
**Auto Transmit Cs**{::nomarkdown}<pre><code>  auto_transmit_cs</code></pre>{:/} | .01 | A '1' in this field indicates the facility has currently scheduled<br/>background controlled substances transmissions for CMOP processing. | ENUMERATION | REQUIRED | {::nomarkdown}YES: <em><strong>1</strong></em><br/>NO: <em><strong>2</strong></em>{:/}
**Queued To Begin**{::nomarkdown}<pre><code>  queued_to_begin</code></pre>{:/} | 1 | The date/time of the initial background controlled substances<br/>transmission. | DATE-TIME |  | 
**Scheduling Frequency (hrs)**{::nomarkdown}<pre><code>  scheduling_frequency_hrs</code></pre>{:/} | 2 | This is the frequency (in hours) that the automatic processing will be<br/>rescheduled. | NUMERIC |  | 
**Next Transmission Time**{::nomarkdown}<pre><code>  next_transmission_time</code></pre>{:/} | 3 | This is the date/time of the next scheduled auto transmission. | DATE-TIME | REQUIRED | 
**Scheduled By**{::nomarkdown}<pre><code>  scheduled_by</code></pre>{:/} | 5 | The name of the person who scheduled the automatic processing. | POINTER |  | [New_Person-200](New_Person-200)
**Task Number**{::nomarkdown}<pre><code>  task_number</code></pre>{:/} | 6 | This is the task number used to reschedule the job. | NUMERIC |  | 
**Number Of Days To Transmit**{::nomarkdown}<pre><code>  number_of_days_to_transmit</code></pre>{:/} | 7 | This number determines the number of days to add to the current date to<br/>calculate the transmit through date for CMOP auto transmissions. | NUMERIC |  | 

[&uarr; Return to top](#top)<br/>




{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:39 pm</p>{:/}