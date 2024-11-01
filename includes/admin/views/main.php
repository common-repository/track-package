<?php
/**
 * Represents the view for the administration dashboard.
 *
 * This includes the header, options, and other information that should provide
 * The User Interface to the end user.
 *
 * @package   Track_Package_Admin
 * @author    justcodeUA
 * @license   GPL-2.0+
 * @link      http://justcode.in.ua
 * @copyright 2017 justcodeUA
 */

/**
 *-----------------------------------------
 * Do not delete this line
 * Added for security reasons: http://codex.wordpress.org/Theme_Development#Template_Files
 *-----------------------------------------
 */
defined( 'ABSPATH' ) or die( "Direct access to the script does not allowed" );
/*-----------------------------------------*/
?>

<div class="wrap track-wrap">
    <div class="track-container constructor_wrap">
        <h1><?php echo esc_html( get_admin_page_title() ); ?></h1>

        Специально для интернет магазинов, блогов, доски объявлений, информационных ресурсов мы разработали iframe
            окно, которое можно добавить на любую страницу вашего сайта. Независимо от технологий, используемых Вами при
            разработке Вашего сайта, виджеты будут отображаться корректно.
            <ol>
                <li>Поддержка самых популярных перевозчиков: Новая Почта, Интайм, Автолюкс, Деливери и УкрПочта</li>
                <li>Простота и легкость в использовании</li>
                <li>Мультиязычность (русский, украинский)</li>
            </ol>
            <i class="fa fa-modx"></i><strong>Вставка iframe на сайте </strong>

            Выберите язык виджета
            <div class="tpw_constructor">
                <div class="tpwc-row">
                    <ul class="tpwc-langlist">
                        <li><input class="tpwc-lang" name="languages" type="radio" value="ru"/> Русский</li>
                        <li><input class="tpwc-lang" checked="checked" name="languages" type="radio" value="ua"/>
                            Украинский
                        </li>
                    </ul>
                </div>
                <div class="tpwc-row">

                    Выберите службы доставки для виджета
                    <ul class="tpwc-deliverylist">
                        <li><label><input class="tpwc-delivery" type="checkbox" value="novaposhta"/> Новая почта</label>
                        </li>
                        <li><label><input class="tpwc-delivery" type="checkbox" value="delivery_auto"/> Деливери
                                Авто</label></li>
                        <li><label><input class="tpwc-delivery" type="checkbox" value="ukrposhta"/> УкрПочта</label>
                        </li>
                        <li><label><input class="tpwc-delivery" type="checkbox" value="intime"/> Ин-Тайм</label></li>
                        <li><label><input class="tpwc-delivery" type="checkbox" value="autolux"/> Автолюкс</label></li>
                    </ul>
                </div>
                <div class="tpwc-row">

                    Для использования виджета на своем сайте достаточно в нужное место в html коде вашего сайта добавить
                    несколько строк кода и должна быть подключена быблиотека jQuery не ниже 1.11

                </div>
                <div class="tpwc-row"><? echo do_shortcode('[constructor]');?></div>
                <div class="tpwc-row">
                    <button class="generate_code">Сгенерировать код</button>
                </div>
                <div class="tpwc-row result-container"></div>
            </div>
    </div>

</div>