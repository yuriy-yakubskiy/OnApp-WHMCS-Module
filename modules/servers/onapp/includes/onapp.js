$(document).ready(function(){
// form submit action
    form = $("form[name$='packagefrm']");

    form.submit(function() {
        if (! check_vars ) return true;

        input2  = $("select[name$='selected_tpl[]']");
        input3  = $("input[name$='packageconfigoption[3]']");
        input5  = $("input[name$='packageconfigoption[5]']");
        input7  = $("input[name$='packageconfigoption[7]']");
        input8  = $("input[name$='packageconfigoption[8]']");
        input9  = $("input[name$='packageconfigoption[9]']");
        input11 = $("input[name$='packageconfigoption[11]']");

        if ( input2.text() == "" ) {
            alert('Template must be set');
        } else if ( parseInt(input3.val()).toString() != input3.val() ) {
            alert('RAM must be integer betwen 0..99999');
            input3.focus();
        } else if ( parseInt(input5.val()).toString() != input5.val() ) {
            alert('CPU Cores must be integer betwen 0..99999');
            input5.focus();
        } else if ( parseInt(input7.val()).toString() != input7.val() ) {
            alert('CPU Priority must be integer betwen 0..99999');
            input7.focus();
        } else if ( parseInt(input9.val()).toString() != input9.val() ) {
            alert('Swap disk size must be integer betwen 0..99999');
            input9.focus();
        } else if ( parseInt(input11.val()).toString() != input11.val() ) {
            alert('Primary disk size must be integer betwen 0..99999');
            input11.focus();
        } else if ( input8.val() != '' && parseInt(input8.val()).toString() != input8.val() ) {
            alert('Port Speed must be integer betwen 0..99999 or empty');
            input8.focus();
        } else {
            add_selected_tpls();
            return true;
        };

        return false;
    });

// replace values
    serverSelect = $("select[name$='packageconfigoption[1]']");

    serverSelected = serverSelect.val();

    selectHTML = '';
    for ( var option in serverOptions )
            selectHTML += '<option value="'+option+'">'+serverOptions[option]+'</option>';

    serverSelect.html(selectHTML);
    serverSelect.val(serverSelected);
    serverSelect.width(180);

    templateSelect = $("input[name$='packageconfigoption[2]']");
    templateSelected = templateSelect.val();
    templateSelect.val(templateSelected);
    templateSelect.width(selectWidth);
    templateSelect.css('display', 'none');

    hvSelect = $("select[name$='packageconfigoption[4]']");
    hvSelected = hvSelect.val();

    selectHTML = '';
    for ( var option in hvOptions ) {
        selected = (option == hvSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+hvOptions[option]+'</option>';
    }

    hvSelect.html(selectHTML);
    hvSelect.width(selectWidth);

    networkSelect = $("select[name$='packageconfigoption[6]']");
    networkSelected = networkSelect.val();

    selectHTML = '';
    for ( var option in networkOptions ) {
        selected = (option == networkSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+networkOptions[option]+'</option>';
    }

    networkSelect.html(selectHTML);
    networkSelect.width(selectWidth);

    addRAMSelect = $("select[name$='packageconfigoption[12]']");
    addRAMSelected = addRAMSelect.val();
    addRAMSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addRAMSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addRAMSelect.html(selectHTML);

    addCoresSelect = $("select[name$='packageconfigoption[13]']");
    addCoresSelected = addCoresSelect.val();
    addCoresSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addCoresSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addCoresSelect.html(selectHTML);

    addPrioritySelect = $("select[name$='packageconfigoption[14]']");
    addPrioritySelected = addPrioritySelect.val();
    addPrioritySelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addPrioritySelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addPrioritySelect.html(selectHTML);

    addDiskSelect = $("select[name$='packageconfigoption[15]']");
    addDiskSelected = addDiskSelect.val();
    addDiskSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addDiskSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addDiskSelect.html(selectHTML);

    addIPSelect = $("select[name$='packageconfigoption[16]']");
    addIPSelected = addIPSelect.val();
    addIPSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addIPSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addIPSelect.html(selectHTML);

    addBackupSelect = $("select[name$='packageconfigoption[17]']");
    addBackupSelected = addBackupSelect.val();
    addBackupSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in configOptions ) {
        selected = (option == addBackupSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+configOptions[option]+'</option>';
    }
    addBackupSelect.html(selectHTML);

    addIPBaseSelect = $("select[name$='packageconfigoption[18]']");
    addIPBaseSelected = addIPBaseSelect.val();
    addIPBaseSelect.width(selectWidth);
    selectHTML = '';
    for ( var option in productAddons ) {
        selected = (option == addIPBaseSelected) ? ' selected="selected"' : '';
        selectHTML += '<option value="'+option+'"'+selected+'>'+productAddons[option]+'</option>';
    }
    addIPBaseSelect.html(selectHTML);

// get base table
    var table = $('table').eq(5);
    var tr = table.find('tr').eq(0);

// get servers
    var servers_label = tr.find('td').eq(0).html();
    var servers_html  = tr.find('td').eq(1).html();

// get templates
    var templates_label = tr.find('td').eq(2).html();
    var templates_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get templates
    var ram_label = tr.find('td').eq(0).html();
    var ram_html  = tr.find('td').eq(1).html();

// get ram
    var hypervisors_label = tr.find('td').eq(2).html();
    var hypervisors_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get cores
    var cores_label = tr.find('td').eq(0).html();
    var cores_html  = tr.find('td').eq(1).html();

// get networks
    var networks_label = tr.find('td').eq(2).html();
    var networks_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get cpu priority
    var priority_label = tr.find('td').eq(0).html();
    var priority_html  = tr.find('td').eq(1).html();

// get port speed
    var port_speed_label = tr.find('td').eq(2).html();
   var port_speed_html   = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get swap
    var swap_label = tr.find('td').eq(0).html();
    var swap_html  = tr.find('td').eq(1).html();

// get build_auto
    var build_auto_label = tr.find('td').eq(2).html();
    var build_auto_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get disk
    var disk_label = tr.find('td').eq(0).html();
    var disk_html  = tr.find('td').eq(1).html();

// get additional RAM
    var addram_label = tr.find('td').eq(2).html();
    var addram_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get additional CPU Cores
    var addcores_label = tr.find('td').eq(0).html();
    var addcores_html  = tr.find('td').eq(1).html();

// get additional CPU Priority
    var addpriority_label = tr.find('td').eq(2).html();
    var addpriority_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get additional Primary Disk
    var adddisk_label = tr.find('td').eq(0).html();
    var adddisk_html  = tr.find('td').eq(1).html();

// get IP Address
    var ip_label = tr.find('td').eq(2).html();
    var ip_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// get backup
    var backup_label = tr.find('td').eq(0).html();
    var backup_html  = tr.find('td').eq(1).html();

// get IP Address
    var ipbase_label = tr.find('td').eq(2).html();
    var ipbase_html  = tr.find('td').eq(3).html();

// remove row
    tr.remove();
    var tr = table.find('tr').eq(0);

// remove row
    tr.remove();

// first table
    var tbody = table.find('tbody');
    tbody.append( cell_html(servers_label, servers_html) );
    tbody.append( cell_html(hypervisors_label, hypervisors_html) );

    if ( error_msg != "" ) {
        table.after( '<br/>'+error_msg+'<br/>' );
        check_vars = false;
    } else {

    // second table
        table.after('<br><table class="form" width="100%" border="0" cellspacing="2" cellpadding="3"><tbody></tbody></table>');
        var second_table = $('table').eq(6); 
        var tbody = second_table.find('tbody');

        tbody.append('<tr><td class="fieldlabel" colspan="2"><b>Resources</b></td></tr>');

    // sliders
        var ram_slider = create_slider_html(ram_html, 8192, 256, 4, 3);
        var cores_slider = create_slider_html(cores_html, 4, 1, 1, 5);
        var priority_slider = create_slider_html(priority_html, 100, 1, 1, 7);
        var disk_slider = create_slider_html(disk_html, 240, 0, 1, 11);
        var swap_slider = create_slider_html(swap_html, 240, 0, 1, 9);
        var port_speed_slider = create_slider_html(port_speed_html, 1000, 0, 1, 8);
        var ip_address_slider = create_slider_html(ipbase_html, 20, 1, 1, 18);

        tbody.append( cell_html(ram_label, ram_slider) );
        tbody.append( cell_html(cores_label, cores_slider) );
        tbody.append( cell_html(priority_label, priority_slider) );
        tbody.append( cell_html(disk_label, disk_slider) );
        tbody.append( cell_html(swap_label, swap_slider) );
        tbody.append( cell_html(ipbase_label, ip_address_slider) );
        tbody.append('<tr><td class="fieldlabel" colspan="2"><b>Network Configuration </b></td></tr>');
        tbody.append( cell_html(networks_label, networks_html) );
        tbody.append( cell_html(port_speed_label, port_speed_slider) );

    // third table
        second_table.after('<br><table class="form" width="100%" border="0" cellspacing="2" cellpadding="3"><tbody></tbody></table>');
        var third_table = $('table').eq(7);
        var tbody = third_table.find('tbody');

        tbody.append( cell_html('<b>'+templates_label+'</b>', create_template_filter_html()) );
        tbody.append( cell_html('', templates_html+create_templates_html()) );
        tbody.append( cell_html(build_auto_label, build_auto_html) );

    // forth table
        third_table.after('<br><table class="form" width="100%" border="0" cellspacing="2" cellpadding="3"><tbody></tbody></table>');
        var forth_table = $('table').eq(8);
        var tbody = forth_table.find('tbody');

        tbody.append('<tr><td class="fieldlabel" colspan="2"><b>Additional Resources</b></td></tr>');
        tbody.append( cell_html(addram_label, addram_html) );
        tbody.append( cell_html(addcores_label, addcores_html) );
        tbody.append( cell_html(addpriority_label, addpriority_html) );
        tbody.append( cell_html(adddisk_label, adddisk_html) );
        tbody.append( cell_html(ip_label, ip_html) );
//        tbody.append( cell_html(backup_label, backup_html) );
    };

// assign server select onChange action
    serverSelect = $("select[name$='packageconfigoption[1]']");

    serverSelect.change( function () {
        check_vars = false;
        form = $("form[name$='packagefrm']");
        form.submit();
    } );

    serverSelect.val(serverSelected);

    check_vars = error_msg == "";
});

function cell_html(label, html) {
    return '<tr><td class="fieldlabel" width="150">'+label+'</td><td class="fieldarea">'+html+'</td></tr>';
};

function create_slider_html(input_html, max, min, step, target_id){
    return '<div class="input-with-slider">'+
                 input_html+
            '    <div class="slider" style="float:left; margin:5px 15px 0 5px; width:200px;" max="'+max+'" min="'+min+'" step="'+step+'" target="packageconfigoption['+target_id+']" width="200"></div>'+
            '</div>';
}

function create_templates_html(){
    tplHTML =
        '<div>'+
        '   <div class="available_tpl" style="float:left;width:35%;max-width:280px;">'+
        '       <select name="available_tpl[]" id="available_tpl" multiple="multiple" style="height:280px;width:100%;">'+create_available_tpl_otions()+'</select>'+
        '   </div>'+
        '   <div class="pick-buttons" style="float:left; width: 40px; text-align:center;padding:80px 20px">'+
        '       <input type="button" title="Choose available and add" value="&gt;" class="button addButton" name="add" id="add" style="width:30px;" />'+
        '       <input type="button" title="Choose selected and remove" value="&lt;" class="button removeButton" name="remove" id="remove" style="width:30px;" />'+
        '       <input type="button" title="Add all" value="&gt;&gt;" class="button addAllButton" name="addAll" id="addAll" style="width:30px;" />'+
        '       <input type="button" title="Remove all" value="&lt;&lt;" class="button removeAllButton" name="removeAll" id="removeAll" style="width:30px;" />'+
        '   </div>'+
        '   <div class="selected_tpl" style="float:left;width:35%;max-width:280px;">'+
        '       <select name="selected_tpl[]" id="selected_tpl" multiple="multiple" style="height:280px;width:100%;"></select>'+
        '   </div>'+
        '   <div class="clear"></div>'+
        '</div>';

    return tplHTML
}

function create_template_filter_html(){
    tplHTML =
        '<div>'+
        '   <div class="filter_tpl">'+
        '       <select name="filter_tpl" id="filter_tpl" style="width:280px;">'+create_filter_tpl_otions()+'</select>'+
        '   </div>'+
        '</div>';

    return tplHTML
}

function create_available_tpl_otions(){
    selectHTML = '';
    for (var os in templateOptions){
       var os_arr = templateOptions[os];
       for ( var option in os_arr)
            selectHTML += '<option class="'+os+'" value="'+option+'">'+os_arr[option]+'</option>';
    }

    return selectHTML;
}

function create_filter_tpl_otions() {
    selectHTML = '<option value="all">All</option>';
    for (var os in templateOptions){
       selectHTML += '<option value="'+os+'">'+os.replace('_', ' - ')+'</option>';
    }

    return selectHTML;
}

function osFilter() {

    var os = $("#filter_tpl").val();

    if(os == 'all'){
        $("#available_tpl option").each(function(){
            $(this).css('display', '');
        });
        $("#selected_tpl option").each(function(){
            $(this).css('display', '');
        });
    } else {
        $("#available_tpl option[class!="+os+"]").each(function(){
            $(this).css('display', 'none');
        });
        $("#selected_tpl option[class!="+os+"]").each(function(){
            $(this).css('display', 'none');
        });
        $("#available_tpl option[class="+os+"]").each(function(){
            $(this).css('display', '');
        });
        $("#selected_tpl option[class="+os+"]").each(function(){
            $(this).css('display', '');
        });
    }

    return true;
}

function add_selected_tpls(){
    var selected_tpl_ids = new Array();
    $("#selected_tpl option").each(function(){
        if ($(this).css('display') != 'none')
            selected_tpl_ids.push( $(this).attr('value') );
    });

    $("input[name$='packageconfigoption[2]']").val(selected_tpl_ids.join());
}

function in_array(needle, haystack){
    for(var i=0; i<haystack.length; i++)
        if(needle == haystack[i])
            return true;
    return false;
}

function get_saved_tpls(){
    return $("input[name$='packageconfigoption[2]']").val().split(',');
}

function selected_tpls(){
    var saved_tpls = get_saved_tpls();
    $("#available_tpl option").each(function(){
        if(in_array($(this).val(), saved_tpls))
            $(this).attr('selected', 'selected');
    });
    $("#add").trigger('click');
}

function check_autobuild(){
    var selected_count = 0;
    var autobuild = $("input[name$='packageconfigoption[10]']");
    $("#selected_tpl option").each(function(){
        if ($(this).css('display') != 'none')
           selected_count++;
    });

    if(selected_count > 1){
        autobuild.attr('disabled', true);
    } else {
        autobuild.attr('disabled', false);
    }
}

function after_add() {
    check_autobuild();
}

function after_remove(){
    osFilter();
    check_autobuild();
}

$(function() {
    if ($("#available_tpl").length && $("#selected_tpl").length) {
        $("#available_tpl").multiSelect("#selected_tpl", {trigger: "#add", triggerAll: "#addAll", sortOptions: false, autoSubmit: false, afterMove: after_add});
        $("#selected_tpl").multiSelect("#available_tpl", {trigger: "#remove", triggerAll: "#removeAll", sortOptions: false, autoSubmit: false, afterMove: after_remove});

        $("#filter_tpl").change( function(){
            osFilter();
        });
        selected_tpls();
        osFilter();
    }
});
