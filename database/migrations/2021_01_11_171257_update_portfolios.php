<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class UpdatePortfolios extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        //
        

        $portfolios = DB::select('select * from portfolios');

        $array = [ 'Nort Monitoring' => 'nortmonitoring.png', 'Proxy Auto Configuration Service' => 'ProxyService.png', 'Luck Generator' => 'luckgenerator.png', 'Underman' => 'underman.png', 'Dance club' => 'dance.png', 'Bank Service (Test Task)' => 'bank.png', 'Endless tree (Test Task)' => 'minty.png', 'Online Store' => 'beyblade.png'];

        

        foreach($portfolios as $portfolio) {
            DB::update("update portfolios set img = '".$array[$portfolio->name]."' where id = ".$portfolio->id);
        }
        
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
